#!/usr/bin/env python3
# i18n/build.py: builds the English pages (en.html, privacy-en.html, nagishut-en.html)
# from the Hebrew pages. Run after every change to the Hebrew text:
#   python3 i18n/build.py        (from the repo root)
# Any Hebrew left untranslated, or a phrase not found, is reported and the build fails,
# so a Hebrew change never silently leaves the English page out of date.
import os, re, sys
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from en import PAGES, COMMON

HEB = re.compile(r'[֐-׿][֐-׿\s"\'״׳–\-.,:]*')
ok = True
for src, dst, pairs in PAGES:
    # Hebrew page: tell search engines about both language versions (idempotent)
    p = os.path.join(R, src); h = open(p, encoding='utf-8').read()
    he_url = 'https://bayit.eliraz.biz/' + ('' if src == 'index.html' else src)
    tag = (f'<link rel="alternate" hreflang="he" href="{he_url}">'
           f'<link rel="alternate" hreflang="en" href="https://bayit.eliraz.biz/{dst}">')
    if tag not in h:
        h = h.replace('</head>', tag + '</head>', 1); open(p, 'w', encoding='utf-8').write(h)
    s = h
    s = s.replace('<html lang="he" dir="rtl">', '<html lang="en" dir="ltr">', 1)
    for he, en in [c for c in COMMON if c[0] in s] + pairs:
        if he not in s:
            print(f'MISSING in {src}: {he[:70]}'); ok = False; continue
        s = s.replace(he, en)
    left = [m.group(0).strip() for m in HEB.finditer(s) if m.group(0).strip()]
    if left:
        ok = False
        for t in sorted(set(left)): print(f'UNTRANSLATED in {dst}: {t[:80]}')
    open(os.path.join(R, dst), 'w', encoding='utf-8').write(s)
    print(f'built {dst} ({len(s)} bytes)')
sys.exit(0 if ok else 1)
