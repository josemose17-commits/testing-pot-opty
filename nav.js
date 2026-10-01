// Floating glass tab bar linking the study pages. Re-attaches itself if a
// page re-renders its body, and marks the current page.
(function () {
  var TABS = [
    ['index.html', 'Home', 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z'],
    ['Exam 2 Info.dc.html', 'Info', 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4.5v.01M11 11h1v6h1'],
    ['Exam 2 Concept Map.dc.html', 'Map', 'M6 6h.01M18 6h.01M12 18h.01M6 6l6 12 6-12M6 6h12'],
    ['Exam 2 Drug Cards.dc.html', 'Drugs', 'M10.5 4.5a4.95 4.95 0 0 1 7 7l-6 6a4.95 4.95 0 0 1-7-7Zm-3 3 7 7'],
    ['Exam 2 Recall.dc.html', 'Recall', 'M4 5h16v11H8l-4 4ZM8 9h8M8 12h5'],
    ['Exam 2 Missed Review.dc.html', 'Missed', 'M4 4l16 16M20 4 4 20'],
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
  new MutationObserver(attach).observe(document.documentElement, { childList: true, subtree: true });
})();
