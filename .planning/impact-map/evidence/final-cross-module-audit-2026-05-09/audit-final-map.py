#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path('.planning/impact-map')
ALLOWED = {'verified', 'exceptioned-deep-partial'}
CARD_FILES = {'README.md', 'code-paths.md', 'file-roles.md', 'change-to-test.md'}
errors: list[str] = []
counts: dict[str, int] = {}
rows = []

for index in sorted(ROOT.rglob('leaf-index.md')):
    base = index.parent
    for lineno, line in enumerate(index.read_text().splitlines(), 1):
        if not line.startswith('|') or line.startswith('|---') or line.startswith('| Leaf') or line.startswith('| Module'):
            continue
        cells = [cell.strip() for cell in line.strip().strip('|').split('|')]
        if not cells:
            continue
        status = ''
        for cell in cells:
            match = re.search(r'`([^`]*(?:verified|partial|stub)[^`]*)`', cell, re.I)
            if match:
                status = match.group(1)
                break
        if not status:
            continue
        counts[status] = counts.get(status, 0) + 1
        leaf_name = cells[0].strip('`')
        rows.append((index, lineno, leaf_name, status))
        if status not in ALLOWED:
            errors.append(f'{index}:{lineno}: disallowed coverage {status!r} for {leaf_name}')
        if leaf_name.endswith('/'):
            child = base / leaf_name.rstrip('/')
            if not child.exists():
                errors.append(f'{index}:{lineno}: missing leaf directory {child}')
                continue
            if (child / 'leaf-index.md').exists():
                if not (child / 'README.md').exists():
                    errors.append(f'{index}:{lineno}: navigation directory missing README.md: {child}')
            else:
                missing = sorted(name for name in CARD_FILES if not (child / name).exists())
                if missing:
                    errors.append(f'{index}:{lineno}: final leaf missing cards {missing}: {child}')

# Top-level module ledger must not leave path states as plain partial/deep-partial.
module_index = ROOT / 'MODULE-INDEX.md'
text = module_index.read_text()
for label in ['refreshed `partial`', '| `scripts/`           | `partial`', '`deep-partial`; priority units']:
    if label in text:
        errors.append(f'{module_index}: stale top-level coverage phrase remains: {label}')

# Local markdown links to .planning/impact-map files should resolve when they are relative links.
link_re = re.compile(r'\[[^\]]+\]\(([^)]+)\)')
for md in sorted(ROOT.rglob('*.md')):
    for lineno, line in enumerate(md.read_text().splitlines(), 1):
        for raw in link_re.findall(line):
            target = raw.split('#', 1)[0]
            if not target or '://' in target or target.startswith('#') or target.startswith('mailto:'):
                continue
            if target.startswith('/'):
                continue
            candidate = (md.parent / target).resolve()
            try:
                candidate.relative_to(Path.cwd().resolve())
            except ValueError:
                continue
            if not candidate.exists():
                errors.append(f'{md}:{lineno}: broken relative link {raw}')

print(f'leaf_rows={len(rows)}')
for status, count in sorted(counts.items()):
    print(f'{status}={count}')
if errors:
    print('FAIL')
    for error in errors:
        print(error)
    sys.exit(1)
print('PASS: final map has only verified/exceptioned active leaf rows, expected cards, and resolving relative links')
