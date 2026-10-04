// Floating glass tab bar linking the study pages. Re-attaches itself if a
// page re-renders its body, and marks the current page.
(function () {
  var TABS = [
    ['index.html', 'Home', 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z'],
    ['Exam 2 Map.html', 'Map', 'M6 6h.01M18 6h.01M12 18h.01M6 6l6 12 6-12M6 6h12'],
    ['Exam 2 Drug Cards.dc.html', 'Drugs', 'M10.5 4.5a4.95 4.95 0 0 1 7 7l-6 6a4.95 4.95 0 0 1-7-7Zm-3 3 7 7'],
    ['Exam 2 Mastery Loop.dc.html', 'Mastery', 'M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5']
  ];
  var here = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  var root = location.pathname.indexOf('/offline/') >= 0 ? '../' : '';
  function build() {
    var nav = document.createElement('nav');
    nav.className = 'hub-tabs'; nav.setAttribute('aria-label', 'Study pages');
    TABS.forEach(function (t) {
      var a = document.createElement('a');
      a.href = root + encodeURI(t[0]);
      if (t[0] === here) a.setAttribute('aria-current', 'page');
      a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + t[2] + '"/></svg><span>' + t[1] + '</span>';
      nav.appendChild(a);
    });
    return nav;
  }
  var nav;
  function attach() { if (!document.body) return; if (!nav) nav = build(); if (!document.body.contains(nav)) document.body.appendChild(nav); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach); else attach();
  // Fetch the other pages in the background once this one is idle, so switching tabs is quick.
  function prefetch() {
    TABS.forEach(function (t) {
      if (t[0] === here) return;
      var l = document.createElement('link'); l.rel = 'prefetch'; l.href = root + encodeURI(t[0]);
      document.head.appendChild(l);
    });
  }
  if (document.readyState === 'complete') setTimeout(prefetch, 1500); else window.addEventListener('load', function () { setTimeout(prefetch, 1500); });
  new MutationObserver(attach).observe(document.documentElement, { childList: true, subtree: true });

  // Browsers keep a page for a few minutes, so a phone can show yesterday's version after an update.
  // version.json is never cached: if it names a newer build than this script, reload once to pick it up.
  // Bump BUILD here and in version.json together on every release.
  var BUILD = '202610042300';
  window.addEventListener('load', function () {
    if (!window.fetch || location.protocol === 'file:') return;
    fetch(root + 'version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (v) {
      if (!v || !v.build || v.build <= BUILD) return;
      var k = 'e2-reloaded-' + v.build;
      try { if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (e) { return; }
      // A new address can't come from the browser cache, so this always fetches the new page.
      try { var u = new URL(location.href); u.searchParams.set('b', v.build); location.replace(u.toString()); } catch (e) { location.reload(); }
    }).catch(function () {});
  });
})();
