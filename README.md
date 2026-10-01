# Exam 2 study hub — NRS 114 Med-Surg 1

Study pages for Exam 2 (chapters 22, 24, 25, 27, 28, 29, 30, 34), built in Claude Design, restyled in Essex County College green, gold and white with frosted-glass panels. Open `index.html` to start.

| Page | What it does |
| --- | --- |
| `Exam 2 Map.html` | All the content as one map: notes, organ → molecule breakdowns, tap-to-define words, connections, and your focus topics |
| `Exam 2 Drug Cards.dc.html` | Drug cards by system and class |
| `Exam 2 Recall.dc.html` | Recall, NCLEX and NGN practice |
| `Exam 2 Missed Review.dc.html` | Spaced repair cards built from recall misses |
| `Exam 2 Mastery Loop.dc.html` | Pre-test → report → repair → post-test until 90% |
| `Exam 2 Info.dc.html`, `Exam 2 Concept Map.dc.html` | The older one-page versions the map was built from |

## Focus: studying only what the professor lists

On the map, tap **Pick topics** and choose the topics (or **Lists → Study guide topics**). That choice is saved as your focus, and:

- the map glows those topics and can hide the rest (**Focus only**);
- Recall fades cards outside the focus and hides extra questions outside it (a button turns this off);
- the Mastery Loop builds its pre-test, repair deck and post-tests from those topics only.

**Lists → Save this focus as a list** keeps it under a name, so each exam (or quiz) can have its own list. `focus.js` holds the keyword rules that decide which questions belong to each map topic; add a rule there when you add a topic.

## Adding content for a later exam

1. Add the chapter sections to the Info page (`Exam 2 Info.dc.html`) and run `python3 tools/extract_info_topics.py` (needs `pip install beautifulsoup4`). It rewrites `data/info-topics.js` and `data/topic-index.js`.
2. New chapters show up on the map by themselves (under "More chapters" until you add them to `SYSTEMS` in `Exam 2 Map.html`).
3. Add keyword rules for the new topics in `focus.js`, and question data in `data/`.

## Layout

- `data/` — question banks and drug data the pages load (`ngn-*`, `recall-*`, `drugs-*`), the glossary, the map's topics (`info-topics.js`, generated) and breakdowns (`concept-nodes.js`, with the short memory keys in `concept-keys.js`).
- `focus.js` — the shared focus (which topics you picked) that the map, Recall and the Mastery Loop read.
- `tools/` — the script that splits the Info page into map topics.
- `support.js` — the Claude Design page runtime every `.dc.html` page loads.
- `_ds/nocturne-…/styles.css` — the shared theme (colors at the top; glass layer and tab bar at the bottom).
- `nav.js` — the floating tab bar on every page.
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
