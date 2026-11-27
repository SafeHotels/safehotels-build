/* SafeHotels.ai cookie consent.
   Google Analytics only loads after the visitor clicks "Accept". */
(function () {
  var GA_ID = 'G-3R56CJDZZ0';
  var KEY = 'sh_cookie_consent';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAnalytics() {
    if (window.__shGaLoaded) return;
    window.__shGaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  function banner() {
    var b = document.createElement('div');
    b.id = 'sh-cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie choices');
    b.innerHTML =
      '<p>We\'d like to use analytics cookies to see how people use SafeHotels.ai. ' +
      'They\'re only set if you accept. <a href="/cookies.html">Cookie policy</a></p>' +
      '<div><button type="button" data-c="rejected">Reject</button>' +
      '<button type="button" data-c="granted">Accept</button></div>';
    var css = document.createElement('style');
    css.textContent =
      '#sh-cookie-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;max-width:640px;margin:0 auto;' +
      'background:#111828;color:#dde2f0;border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:16px 18px;' +
      'display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap;' +
      'font:14px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.4)}' +
      '#sh-cookie-banner p{margin:0;flex:1 1 300px}#sh-cookie-banner a{color:#ff751f}' +
      '#sh-cookie-banner div{display:flex;gap:8px}' +
      '#sh-cookie-banner button{cursor:pointer;border-radius:8px;padding:8px 16px;font-weight:600;font-size:14px;' +
      'border:1px solid rgba(255,255,255,.25);background:transparent;color:#dde2f0}' +
      '#sh-cookie-banner button[data-c=granted]{background:#ff751f;border-color:#ff751f;color:#fff}';
    document.head.appendChild(css);
    b.addEventListener('click', function (e) {
      var c = e.target && e.target.getAttribute('data-c');
      if (!c) return;
      set(c);
      b.remove();
      if (c === 'granted') loadAnalytics();
    });
    document.body.appendChild(b);
  }

  // Lets the cookie policy page reopen the choice
  window.shCookieSettings = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    var old = document.getElementById('sh-cookie-banner');
    if (old) old.remove();
    banner();
  };

  var choice = get();
  if (choice === 'granted') loadAnalytics();
  else if (!choice) {
    if (document.body) banner();
    else document.addEventListener('DOMContentLoaded', banner);
  }
})();
