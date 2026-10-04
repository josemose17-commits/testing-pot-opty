# Exam 2 study hub — NRS 114 Med-Surg 1

Study pages for Exam 2 (chapters 22, 24, 25, 27, 28, 29, 30, 34), built in Claude Design, restyled in Essex County College green, gold and white with frosted-glass panels. Open `index.html` to start.

| Page | What it does |
| --- | --- |
| `Exam 2 Map.html` | All the content as one map: notes, organ → molecule breakdowns, tap-to-define words, connections, and your focus topics |
| `Exam 2 Drug Cards.dc.html` | Drug cards by system and class; each card opens in sections (what it is, how it works step by step, before you give it and why, what to watch for and why, teaching, the exam angle) |
| `Exam 2 Mastery Loop.dc.html` | Pre-test → report → repair → post-test until 90%. After every question: what it is really asking, the cues, every option explained, the mechanism step by step, the rule, and the likely reason you missed it |
| `Exam 2 Concept Map.dc.html` | The older one-page concept map |
| `Exam 2 Info.dc.html` | Source the map's topics are extracted from (`tools/extract_info_topics.py`); visiting it opens the map |

## Focus: studying only what the professor lists

On the map, tap **Pick topics** and choose the topics (or **Lists → Study guide topics**). That choice is saved as your focus, and:

- the map glows those topics and can hide the rest (**Focus only**);
- the Mastery Loop builds its pre-test, repair deck and post-tests from those topics only.

**Lists → Save this focus as a list** keeps it under a name, so each exam (or quiz) can have its own list. `focus.js` holds the keyword rules that decide which questions belong to each map topic; add a rule there when you add a topic.

## Adding content for a later exam

1. Add the chapter sections to the Info page (`Exam 2 Info.dc.html`) and run `python3 tools/extract_info_topics.py` (needs `pip install beautifulsoup4`). It rewrites `data/info-topics.js` and `data/topic-index.js`.
2. New chapters show up on the map by themselves (under "More chapters" until you add them to `SYSTEMS` in `Exam 2 Map.html`).
3. Add keyword rules for the new topics in `focus.js`, and question data in `data/`.
4. For the short (Quick) version of the notes, run `python3 tools/dump_note_blocks.py <folder>` to list each wordy paragraph, then add bullets for it in `data/notes-short/<chapter>.js`, keyed by the paragraph's heading (a labeled cell's label; for an unlabeled paragraph, `¶` plus its opening words). Paragraphs without bullets just show in full.
5. For each new question, add its explanation to `data/explain/<chapter>.js` (keyed by the Mastery Loop id, e.g. `30|n|2`). Without one, the question still works with its short rationales.

## Layout

- `data/` — question banks and drug data the pages load (`ngn-*`, `recall-*` — the Mastery Loop's question bank and repair cards — `drugs-*`), the glossary, the map's topics (`info-topics.js`, generated) and breakdowns (`concept-nodes.js`, with the short memory keys in `concept-keys.js`).
- `focus.js` — the shared focus (which topics you picked) that the map and the Mastery Loop read.
- `data/notes-short/` — the short, bullet versions of the notes (Quick mode on the map); every fact kept, the full paragraph one tap away. `adpie.js` covers the nursing-process cells and overview paragraphs.
- `data/explain/` — the explanation layer over the question and drug data: `<chapter>.js` (per question: what it asks, cues, every option's rationale, mechanism, rule), `cards.js` (myth and recall repair cards), `drugs-1.js`/`drugs-2.js` (mechanism steps and checks per drug), `drug-whys.js` (why each side effect happens), `drug-more.js` (teaching, emergency actions, comparisons).
- `tools/` — scripts that split the Info page into map topics and list the paragraphs that have short versions.
- `support.js` — the Claude Design page runtime every `.dc.html` page loads.
- `_ds/nocturne-…/styles.css` — the shared theme (colors at the top; glass layer and tab bar at the bottom).
- `nav.js` — the floating tab bar on every page. It also checks `version.json` and reloads once when a newer build is published, so phones don't keep showing an old version. **On each release, bump `BUILD` in `nav.js` and the number in `version.json` together** (and the `?v=` on any changed data file).
- `notes/` — audio notes and the instructor's study guide.

## Running it

The pages load data files with relative paths, so open them through a web server rather than double-clicking:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Or turn on GitHub Pages (Settings → Pages → deploy from branch). The older pages fetch React from unpkg.com, so they need an internet connection.

Progress is stored in the browser's localStorage, so it stays on the device and browser you studied on.
