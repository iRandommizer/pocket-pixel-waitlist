// Pocket Pixel waitlist backend — Google Apps Script Web App.
// Bind this script to the Google Sheet that stores signups
// (Extensions > Apps Script, from inside the Sheet).
//
// Both read (queue count) and write (signup) go through doGet with a
// JSONP callback, not doPost — Apps Script Web Apps don't send CORS
// response headers, so a normal fetch() can't read the response back.
// A <script src="...&callback=fn"> tag isn't subject to CORS at all.
//
// Email verification: submitting the form doesn't confirm anyone by
// itself — it writes a "pending" row with a one-time token and emails a
// confirm link. Only clicking that link (action=verify, opened directly
// against this Web App's own /exec URL, not through the Worker) flips
// the row to "confirmed". This stops a stranger from adding someone
// else's address, and stops a repeat submit from leaking "you're
// already on the list" to whoever controls that inbox.

var SHEET_NAME = "Waitlist";
var CAP = 100;

// column indices (0-based) — keep in sync with the header row in getSheet()
var COL = {
  TIMESTAMP: 0, EMAIL: 1, NAME: 2, HANDLE: 3, PUT_ON_YOURS: 4,
  HOW_MANY: 5, NOTES: 6, LANG: 7, STATUS: 8, TOKEN: 9, MAIL_STATUS: 10,
};

function doGet(e) {
  var action = e.parameter.action || "queue";
  if (action === "verify") return handleVerify(e.parameter);
  var callback = e.parameter.callback;
  var result = action === "submit" ? handleSubmit(e.parameter) : getQueueCount();
  return jsonp(result, callback);
}

function jsonp(obj, callback) {
  var json = JSON.stringify(obj);
  var body = callback ? callback + "(" + json + ")" : json;
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function htmlPage(title, body) {
  var html = "<!doctype html><html><head><meta charset='utf-8'>" +
    "<meta name='viewport' content='width=device-width, initial-scale=1'><title>" + title + "</title></head>" +
    "<body style=\"font-family:monospace;background:#07080a;color:#d8cfb8;display:grid;" +
    "place-items:center;min-height:100vh;margin:0;text-align:center;padding:24px;box-sizing:border-box;\">" +
    "<div><h1 style='color:#ff7300;font-size:20px;'>" + title + "</h1>" +
    "<p style='font-size:16px;max-width:340px;'>" + body + "</p></div></body></html>";
  return HtmlService.createHtmlOutput(html);
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp", "Email", "Name", "Instagram", "Put on yours", "How many",
      "Notes", "Lang", "Status", "Token", "Mail status"]);
  }
  return sheet;
}

function getQueueCount() {
  var sheet = getSheet();
  var count = Math.max(0, sheet.getLastRow() - 1); // minus header row
  return { ahead: count, cap: CAP };
}

function findRowByEmail(data, email) {
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][COL.EMAIL]).trim().toLowerCase() === email) return i;
  }
  return -1;
}

function handleSubmit(p) {
  // honeypot: a real visitor never fills this hidden field
  if (p.website) return { ok: false, error: "spam" };

  var email = String(p.email || "").trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "invalid_email" };
  }

  var name = String(p.name || "").trim().slice(0, 100);
  var handle = String(p.handle || "").trim().slice(0, 100);
  var putOnYours = String(p.putOnYours || "").trim().slice(0, 300);
  var howMany = String(p.howMany || "").trim().slice(0, 100);
  var notes = String(p.notes || "").trim().slice(0, 1000);
  var lang = String(p.lang || "en").trim().slice(0, 5);

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = getSheet();
    var data = sheet.getDataRange().getValues();
    var rowIdx = findRowByEmail(data, email);

    if (rowIdx !== -1) {
      var status = data[rowIdx][COL.STATUS];
      if (status === "confirmed") {
        // don't touch name/handle/answers on a repeat submit — the row is settled
        return { ok: true, position: rowIdx, alreadyJoined: true, pending: false };
      }
      // still pending confirmation — resend the same link, don't create a duplicate row
      var token = data[rowIdx][COL.TOKEN];
      var mailErr = sendVerification(email, name, lang, token);
      sheet.getRange(rowIdx + 1, COL.MAIL_STATUS + 1).setValue(mailErr || "sent " + new Date().toISOString());
      return { ok: true, position: rowIdx, alreadyJoined: true, pending: true };
    }

    var newToken = Utilities.getUuid();
    sheet.appendRow([new Date(), email, name, handle, putOnYours, howMany, notes, lang,
      "pending", newToken, ""]);
    var position = sheet.getLastRow() - 1;
    var mailErr2 = sendVerification(email, name, lang, newToken);
    sheet.getRange(sheet.getLastRow(), COL.MAIL_STATUS + 1).setValue(mailErr2 || "sent " + new Date().toISOString());
    return { ok: true, position: position, alreadyJoined: false, pending: true };
  } finally {
    lock.releaseLock();
  }
}

function handleVerify(p) {
  var token = String(p.token || "").trim();
  if (!token) return htmlPage("Link not recognized", "This confirmation link looks incomplete.");

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = getSheet();
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][COL.TOKEN]) === token) {
        if (data[i][COL.STATUS] !== "confirmed") {
          sheet.getRange(i + 1, COL.STATUS + 1).setValue("confirmed");
        }
        return htmlPage("You're on the list", "Thanks — your spot on the Pocket Pixel waitlist is confirmed. You can close this tab.");
      }
    }
    return htmlPage("Link expired", "This confirmation link isn't valid anymore. Try signing up again from the site.");
  } finally {
    lock.releaseLock();
  }
}

// Returns null on success, or an error string to log if sending failed.
// Never throws — a mail failure should never break the signup itself.
function sendVerification(email, name, lang, token) {
  var link = ScriptApp.getService().getUrl() + "?action=verify&token=" + encodeURIComponent(token);
  var subject, body;
  if (lang === "pt") {
    subject = "Confirme seu lugar na lista do Pocket Pixel";
    body = "Oi" + (name ? ", " + name : "") + "! Confirme seu email para garantir seu lugar na lista do Pocket Pixel:\n\n" +
      link + "\n\nSe você não pediu isso, ignore este email.\n\n- Yuan (@chiusday.art)";
  } else if (lang === "es") {
    subject = "Confirma tu lugar en la lista de Pocket Pixel";
    body = "Hola" + (name ? ", " + name : "") + "! Confirma tu email para asegurar tu lugar en la lista de Pocket Pixel:\n\n" +
      link + "\n\nSi no pediste esto, ignora este correo.\n\n- Yuan (@chiusday.art)";
  } else {
    subject = "Confirm your spot on the Pocket Pixel waitlist";
    body = "Hey" + (name ? ", " + name : "") + "! Click below to confirm your spot on the Pocket Pixel waitlist:\n\n" +
      link + "\n\nIf you didn't ask for this, just ignore this email.\n\n- Yuan (@chiusday.art)";
  }
  try {
    MailApp.sendEmail(email, subject, body);
    return null;
  } catch (err) {
    return "failed: " + err.message;
  }
}
