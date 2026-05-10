# Docs tools Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Content-to-route path

1. A page in `docs/tools` changes or moves.
2. Local index pages plus `docs/docs.json` determine whether the route stays reachable in Mintlify.
3. `pnpm check:docs` and `pnpm docs:check-links` are the first automated checks.

## Translation gate path

1. English page titles, section labels, or short nav labels change.
2. `pnpm docs:check-i18n-glossary` confirms whether glossary coverage is still complete.
3. Locale regeneration stays downstream of approved glossary updates and was not executed during Wave 4.

## Trace rule

When a page change is meant to document a behavior change in code, trace from the docs page to the owning product/config/plugin surface before deciding whether a product test needs to run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `53` changed path(s) to this final leaf. `53` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 12, 'M': 41}`.

- `docs/tools/acp-agents-setup.md`
- `docs/tools/acp-agents.md`
- `docs/tools/agent-send.md`
- `docs/tools/apply-patch.md`
- `docs/tools/brave-search.md`
- `docs/tools/browser-control.md`
- `docs/tools/browser-linux-troubleshooting.md`
- `docs/tools/browser-login.md`
- `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`
- `docs/tools/browser.md`
- `docs/tools/btw.md`
- `docs/tools/capability-cookbook.md`
- `docs/tools/clawhub.md`
- `docs/tools/code-execution.md`
- `docs/tools/creating-skills.md`
- `docs/tools/diffs.md`
- `docs/tools/duckduckgo-search.md`
- `docs/tools/elevated.md`
- `docs/tools/exa-search.md`
- `docs/tools/exec-approvals-advanced.md`
- `docs/tools/exec-approvals.md`
- `docs/tools/exec.md`
- `docs/tools/firecrawl.md`
- `docs/tools/gemini-search.md`
- `docs/tools/grok-search.md`
- `docs/tools/image-generation.md`
- `docs/tools/index.md`
- `docs/tools/kimi-search.md`
- `docs/tools/llm-task.md`
- `docs/tools/lobster.md`
- `... 另有 23 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
