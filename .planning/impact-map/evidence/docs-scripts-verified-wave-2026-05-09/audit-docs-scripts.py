from pathlib import Path
import re, sys
roots=[Path('.planning/impact-map/docs'), Path('.planning/impact-map/scripts')]
bad=[]
for root in roots:
    for p in root.rglob('*.md'):
        text=p.read_text()
        for i,line in enumerate(text.splitlines(),1):
            if line.startswith('Coverage: `') and not any(x in line for x in ('`verified`','`exceptioned-deep-partial`')):
                bad.append(f'{p}:{i}: bad coverage line {line}')
            if line.startswith('| `') and ('| `partial`' in line or '| `deep-partial`' in line or '| `stub`' in line):
                bad.append(f'{p}:{i}: stale table coverage {line}')
        for m in re.finditer(r'\[[^\]]+\]\(([^)]+)\)', text):
            target=m.group(1).split('#',1)[0]
            if not target or target.startswith(('http://','https://','mailto:','/')):
                continue
            if target.endswith('.md'):
                resolved=(p.parent/target).resolve()
                try:
                    resolved.relative_to(Path.cwd().resolve())
                except ValueError:
                    bad.append(f'{p}: link escapes repo: {target}')
                    continue
                if not resolved.exists():
                    bad.append(f'{p}: missing link target {target}')
for p in roots:
    for idx in p.rglob('leaf-index.md'):
        text=idx.read_text()
        if 'Coverage' not in text:
            bad.append(f'{idx}: missing Coverage text')
if bad:
    print('\n'.join(bad))
    sys.exit(1)
print('docs_scripts_audit=pass')
