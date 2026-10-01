# Exam 2 study hub — NRS 114 Med-Surg 1

Study pages for Exam 2 (chapters 22, 24, 25, 27, 28, 29, 30, 34), built in Claude Design with the Nocturne design system. Open `index.html` to start.

| Page | What it does |
| --- | --- |
| `Exam 2 Info.dc.html` | Tested topics, reference values, physiology |
| `Exam 2 Concept Map.dc.html` | Interactive concept map |
| `Exam 2 Drug Cards.dc.html` | Drug cards by system and class |
| `Exam 2 Recall.dc.html` | Recall, NCLEX and NGN practice |
| `Exam 2 Missed Review.dc.html` | Spaced repair cards built from recall misses |
| `Exam 2 Mastery Loop.dc.html` | Pre-test → report → repair → post-test until 90% |

## Layout

- `data/` — question banks and drug data the pages load (`ngn-*`, `recall-*`, `drugs-*`).
- `support.js` — the Claude Design page runtime every `.dc.html` page loads.
- `_ds/nocturne-…/` — the Nocturne stylesheet and bundle.
- `offline/` — single-file copies that open without the rest of the folder.
- `notes/` — audio notes and the instructor's study guide.

## Running it

The pages load data files with relative paths, so open them through a web server rather than double-clicking:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Or turn on GitHub Pages (Settings → Pages → deploy from branch). The pages fetch React from unpkg.com, so they need an internet connection; the files in `offline/` do not.

Progress is stored in the browser's localStorage, so it stays on the device and browser you studied on.
