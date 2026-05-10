# GitNexus Evidence

Goal: G008 docs/scripts verified wave.

## Query results

- `query("docs generated baselines config docs plugin sdk api docs links i18n glossary")`: no processes or definitions returned. This is expected for docs content and root scripts with sparse process extraction.
- `query("scripts packaging release versioning build docs i18n bundled plugin metadata release check")`: no processes or definitions returned.
- `query("docs link audit markdownlint check docs i18n glossary docs-list generated baselines")`: no processes or definitions returned.

## Context results

- `context(auditDocsLinks, scripts/docs-link-audit.mjs)`: found `auditDocsLinks` at `scripts/docs-link-audit.mjs:171-288`; incoming call from the CLI file itself; outgoing calls include `normalizeSlashes`, `normalizeRoute`, `stripInlineCode`, `isGeneratedTranslatedDoc`, `resolveRoute`, and `collectNavPageEntries`.
- `context(main, scripts/check-docs-i18n-glossary.mjs)`: found `main` at `scripts/check-docs-i18n-glossary.mjs:181-234`; incoming call from the CLI file itself; outgoing calls include `parseArgs`, `resolveBase`, `listChangedDocs`, `loadGlossarySources`, `readGitFile`, and `extractTerms`.
- `context(writeConfigDocBaselineStatefile)`: found `src/config/doc-baseline.ts:679-723`; incoming callers are `scripts/generate-config-doc-baseline.ts` and `src/config/doc-baseline.integration.test.ts`; outgoing calls include `renderConfigDocBaselineStatefile`, `readIfExists`, and `writeIfChanged`.
- `context(stageBundledPluginRuntimeDeps, scripts/stage-bundled-plugin-runtime-deps.mjs)`: incoming callers are `scripts/runtime-postbuild.mjs` and the CLI file itself; outgoing calls include package JSON read/write, runtime directory listing, and runtime dependency install.
- `context(collectPackUnpackedSizeErrors, scripts/release-check.ts)`: incoming callers are `scripts/release-check.ts` main and `test/release-check.test.ts`; outgoing calls format package size budget errors.

## Cypher impact fallback

GitNexus `impact(...)` returned `user cancelled MCP tool call` immediately for `auditDocsLinks` and `writeConfigDocBaselineStatefile`, so this wave used a bounded Cypher caller query as impact fallback.

Caller query result:

| target                            | targetFile                                      | callers                                                                                  |
| --------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `auditDocsLinks`                  | `scripts/docs-link-audit.mjs`                   | `scripts/docs-link-audit.mjs`                                                            |
| `main`                            | `scripts/check-docs-i18n-glossary.mjs`          | `scripts/check-docs-i18n-glossary.mjs`                                                   |
| `collectPackUnpackedSizeErrors`   | `scripts/release-check.ts`                      | `scripts/release-check.ts` main; `test/release-check.test.ts`                            |
| `stageBundledPluginRuntimeDeps`   | `scripts/stage-bundled-plugin-runtime-deps.mjs` | `scripts/runtime-postbuild.mjs`; `scripts/stage-bundled-plugin-runtime-deps.mjs`         |
| `writeConfigDocBaselineStatefile` | `src/config/doc-baseline.ts`                    | `scripts/generate-config-doc-baseline.ts`; `src/config/doc-baseline.integration.test.ts` |

## Boundary decision

The context/caller data supports the existing split: docs link/glossary/baseline entrypoints are standalone root scripts or generator wrappers, while release/package automation concentrates in release-check and runtime-dependency staging helpers. No additional leaf split was needed before validation.

## Detect changes exception

`detect_changes(scope=all)` returned `user cancelled MCP tool call` immediately in this thread. Product-source scope was instead verified with `git diff --name-only -- src apps extensions packages scripts docs package.json pnpm-lock.yaml`, which returned empty and is recorded in `logs/product-source-diff-final.log`.
