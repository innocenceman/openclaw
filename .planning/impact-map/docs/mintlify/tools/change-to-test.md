# Docs tools Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                          | First validation                             | Escalation trigger                                                                        |
| ---------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Existing page copy, examples, or frontmatter changed | `pnpm check:docs`                            | Escalate to product-specific tests only when the docs change is coupled to code behavior. |
| Page added, renamed, moved, or redirect/nav changed  | `pnpm docs:check-links` and `pnpm docs:list` | Update `docs/docs.json` in the same change when Mintlify route ownership changes.         |
| New English title or short label introduced          | `pnpm docs:check-i18n-glossary`              | Add glossary coverage before any zh-CN rerun.                                             |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `53` (新增 12，修改 41).
- Target-existing path refs in active map: `53`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/tools/acp-agents-setup.md`
- `docs/tools/acp-agents.md`
- `docs/tools/brave-search.md`
- `docs/tools/browser-control.md`
- `docs/tools/browser-linux-troubleshooting.md`
- `docs/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md`
- `docs/tools/browser.md`
- `docs/tools/btw.md`
- `docs/tools/clawhub.md`
- `docs/tools/code-execution.md`
- `docs/tools/creating-skills.md`
- `docs/tools/diffs.md`
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
- `docs/tools/loop-detection.md`
- `docs/tools/media-overview.md`
- `docs/tools/minimax-search.md`
- `docs/tools/multi-agent-sandbox-tools.md`
- `docs/tools/music-generation.md`
- `docs/tools/ollama-search.md`
- `docs/tools/plugin.md`
- `docs/tools/reactions.md`
- `docs/tools/searxng-search.md`
- `docs/tools/skills.md`
- `docs/tools/slash-commands.md`
- `docs/tools/steer.md`
- `docs/tools/subagents.md`
- `docs/tools/thinking.md`
- `docs/tools/trajectory.md`
- `docs/tools/tts.md`
- … plus 3 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
