// Pocket Pixel waitlist backend — Google Apps Script Web App.
// Bind this script to the Google Sheet that stores signups
// (Extensions > Apps Script, from inside the Sheet).
//
// Both read (queue count) and write (signup) go through doGet with a
// JSONP callback, not doPost — Apps Script Web Apps don't send CORS
// response headers, so a normal fetch() can't read the response back.
// A <script src="...&callback=fn"> tag isn't subject to CORS at all.

var SHEET_NAME = "Waitlist";
var CAP = 100;

function doGet(e) {
  var action = e.parameter.action || "queue";
  var callback = e.parameter.callback;
  var result = action === "submit" ? handleSubmit(e.parameter) : getQueueCount();
  return jsonp(result, callback);
}

function jsonp(obj, callback) {
  var json = JSON.stringify(obj);
  var body = callback ? callback + "(" + json + ")" : json;
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp", "Email", "Name", "Instagram", "Put on yours", "How many", "Notes", "Lang"]);
  }
  return sheet;
}

function getQueueCount() {
  var sheet = getSheet();
  var count = Math.max(0, sheet.getLastRow() - 1); // minus header row
  return { ahead: count, cap: CAP };
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
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][1]).trim().toLowerCase() === email) {
        return { ok: true, position: i, alreadyJoined: true }; // idempotent re-submit
      }
    }
    sheet.appendRow([new Date(), email, name, handle, putOnYours, howMany, notes, lang]);
    var position = sheet.getLastRow() - 1;
    sendConfirmation(email, name, lang);
    return { ok: true, position: position, alreadyJoined: false };
  } finally {
    lock.releaseLock();
  }
}

function sendConfirmation(email, name, lang) {
  var subject, body;
  if (lang === "pt") {
    subject = "Você está na lista de espera do Pocket Pixel";
    body = "Obrigado" + (name ? ", " + name : "") + "! Você está na lista para o Pocket Pixel. Te aviso quando o próximo lote estiver pronto.\n\n- Yuan (@chiusday.art)";
  } else if (lang === "es") {
    subject = "Estás en la lista de espera de Pocket Pixel";
    body = "Gracias" + (name ? ", " + name : "") + "! Estás en la lista para Pocket Pixel. Te aviso cuando el próximo lote esté listo.\n\n- Yuan (@chiusday.art)";
  } else {
    subject = "You're on the Pocket Pixel waitlist";
    body = "Thanks" + (name ? ", " + name : "") + "! You're on the list for Pocket Pixel. I'll email you when the next batch is ready.\n\n- Yuan (@chiusday.art)";
  }
  try {
    MailApp.sendEmail(email, subject, body);
  } catch (err) {
    // quota exceeded or invalid address — don't fail the signup over it
  }
}
