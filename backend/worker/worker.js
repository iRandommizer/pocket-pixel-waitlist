// Proxies waitlist queue/submit requests to the Google Apps Script backend.
//
// Why this exists: calling Apps Script's /exec URL directly from the
// browser (via JSONP, since Apps Script sends no CORS headers) works from
// a normal browser but fails inside Instagram's in-app WebView — Google
// applies bot/anti-abuse detection that's sensitive to unusual
// User-Agent/referrer combinations, and IG's WebView trips it. Routing the
// actual Apps Script call through this Worker means Google always sees a
// consistent, server-side request regardless of the visitor's browser, and
// the Worker returns real CORS headers so the frontend can use plain
// fetch() instead of JSONP.

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySwWO9xMM-jhCB86OnJQ1YOyFcjrLR7jq6ww6EV6vLRBaMK-AkG-C8nhWUygFsm3VC/exec";
const CHROME_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const target = new URL(APPS_SCRIPT_URL);

    if (request.method === "POST") {
      let body = {};
      try {
        body = await request.json();
      } catch (err) {
        return jsonResponse({ ok: false, error: "bad_request" }, 400);
      }
      target.searchParams.set("action", "submit");
      for (const [key, value] of Object.entries(body)) {
        target.searchParams.set(key, String(value));
      }
    } else {
      const url = new URL(request.url);
      target.searchParams.set("action", url.searchParams.get("action") || "queue");
    }

    let upstream;
    try {
      upstream = await fetch(target.toString(), {
        redirect: "follow",
        headers: { "User-Agent": CHROME_UA },
      });
    } catch (err) {
      return jsonResponse({ ok: false, error: "upstream_fetch_failed" }, 502);
    }

    const text = await upstream.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      data = { ok: false, error: "upstream_bad_response" };
    }
    return jsonResponse(data, 200);
  },
};

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}
