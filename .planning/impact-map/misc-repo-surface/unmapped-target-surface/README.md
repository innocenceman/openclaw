# Unmapped target-version surface

Coverage: `exceptioned-deep-partial`

This leaf is a target-version coverage gap bucket introduced during the `v2026.4.24` to `v2026.5.4` sidegrade recovery. It groups changed paths that were not covered by the existing brownfield impact-map taxonomy.

Canonical changed-path evidence lives in `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` and the per-leaf brief for `unmapped-target-surface`.

Validation status: explicit mapping gap; future planning should split these paths into first-class leaves before claiming verified coverage.

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `misc-repo-surface`
- Risk: `medium`
- Compatibility: `unknown`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `123`
- Target-existing changed paths reflected here: `73`
- Deleted or renamed-away paths omitted from active impact-map: `50`

### Target-version changed paths

- `config/knip.config.ts`
- `config/markdownlint-cli2.jsonc`
- `config/shellcheckrc`
- `config/swiftformat`
- `config/swiftlint.yml`
- `config/tsconfig/oxlint.core.json`
- `config/tsconfig/oxlint.extensions.json`
- `config/tsconfig/oxlint.json`
- `config/tsconfig/oxlint.scripts.json`
- `deploy/fly.private.toml`
- `docker-compose.yml`
- `openclaw.mjs`
- `security/README.md`
- `security/opengrep/README.md`
- `security/opengrep/check-rule-metadata.mjs`
- `security/opengrep/compile-rules.mjs`
- `security/opengrep/precise.yml`
- `security/opengrep/rules/openclaw-policy/no-raw-http2-connect.yml`
- `src/bootstrap/node-startup-env.ts`
- `src/commitments/commitments-full-chain.integration.test.ts`
- `src/commitments/commitments-heartbeat-policy.e2e.test.ts`
- `src/commitments/config.ts`
- `src/commitments/extraction.test.ts`
- `src/commitments/extraction.ts`
- `src/commitments/model-selection.runtime.ts`
- `src/commitments/runtime.test.ts`
- `src/commitments/runtime.ts`
- `src/commitments/store.test.ts`
- `src/commitments/store.ts`
- `src/commitments/types.ts`
- `src/crestodian/assistant-backends.ts`
- `src/crestodian/assistant-prompts.ts`
- `src/crestodian/assistant.configured.test.ts`
- `src/crestodian/assistant.test.ts`
- `src/crestodian/assistant.ts`
- `src/crestodian/audit.test.ts`
- `src/crestodian/audit.ts`
- `src/crestodian/crestodian.test-helpers.ts`
- `src/crestodian/crestodian.test.ts`
- `src/crestodian/crestodian.ts`
- … plus 33 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
