"""Lists the wordy blocks in each map topic (label paragraphs, long bold-led paragraphs, and "Why" boxes) as plain text,
one file per chapter, so short versions can be written for data/notes-short/<ch>.js.
Block keys must match blockKey() in Exam 2 Map.html: the heading text, plus #n when it repeats in a topic."""
import json, os, re, sys
from bs4 import BeautifulSoup

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'notes-dump')

def blocks(html):
    soup = BeautifulSoup(html, 'html.parser'); seen = {}; out = []
    for d in soup.find_all('div'):
        if d.find(['div', 'p']): continue
        kids = [c for c in d.contents if getattr(c, 'name', None) or str(c).strip()]
        if not kids: continue
        first = kids[0]
        if getattr(first, 'name', None) == 'b' and (re.match(r'^\s*[—–]', str(first.next_sibling or ''))
                                                    or len(d.get_text(' ', strip=True)) >= 250):
            head = first.get_text(' ', strip=True)
        elif 'border-left:2px solid var(--color-accent' in d.get('style', '') and getattr(first, 'name', None) == 'span':
            head = first.get_text(' ', strip=True)
        else:
            continue
        head = re.sub(r'\s+', ' ', head)
        seen[head] = seen.get(head, 0) + 1
        key = head + ('#%d' % seen[head] if seen[head] > 1 else '')
        out.append((key, re.sub(r'\s+', ' ', d.get_text(' ', strip=True))))
    return out

if __name__ == '__main__':
    s = open(os.path.join(ROOT, 'data', 'info-topics.js'), encoding='utf-8').read()
    T = json.loads(s[s.index('['):s.rindex(']') + 1])
    os.makedirs(OUT, exist_ok=True)
    by = {}
    for t in T:
        by.setdefault(t['ch'], []).append('### ' + t['id'] + '\n' + '\n'.join('[' + k + '] ' + v for k, v in blocks(t['html'])))
    for ch, parts in by.items():
        open(os.path.join(OUT, ch + '.txt'), 'w', encoding='utf-8').write('\n\n'.join(parts) + '\n')
        print(ch, sum(len(p) for p in parts))
