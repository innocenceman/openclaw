# docs/mintlify/security

## 1. 功能结论

**文档/生成基线同步**：help,security cross-reference auth list and trusted-env-proxy、proxy direct APNs HTTP2 sessions、guard debug proxy CONNECT under managed proxy、clarify IRC managed proxy coverage；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 1、修改 3、重命名 2

## 3. 功能级详细差异

### 修复 guard debug proxy CONNECT under managed proxy

文档/生成基线同步记录：修复 guard debug proxy CONNECT under managed proxy

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 proxy direct APNs HTTP2 sessions

文档/生成基线同步记录：修复 proxy direct APNs HTTP2 sessions

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 Update SECURITY.md

文档/生成基线同步记录：修改 Update SECURITY.md

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 clarify IRC managed proxy coverage

文档/生成基线同步记录：文档同步 clarify IRC managed proxy coverage

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 clarify managed proxy routing hooks

文档/生成基线同步记录：文档同步 clarify managed proxy routing hooks

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 help,security cross-reference auth list and trusted-env-proxy

文档/生成基线同步记录：文档同步 help,security：cross-reference auth list and trusted-env-proxy

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 move incident response plan

文档/生成基线同步记录：文档同步 move incident response plan

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 security clarify disclosure policy

文档/生成基线同步记录：文档同步 security：clarify disclosure policy

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 新增 add proxy validation command

文档/生成基线同步记录：新增 add proxy validation command

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 维护调整 security remove stale secret baseline

文档/生成基线同步记录：维护调整 security：remove stale secret baseline

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 INCIDENT RESPONSE docs、SECURITY docs、CONTRIBUTING THREAT MODEL docs、THREAT MODEL ATLAS docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 底层路径证据包含删除/重命名，但该 leaf 被归类为 docs-only；这些状态用于确认生成基线/文档已同步，不直接表示该 leaf 自身删除运行时入口。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/security`
- Changed path count: `6`
- Status counts: `新增 1、修改 3、重命名 2`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `5` files, `+324` / `-57`

### 归纳依据

- 主要落点：docs。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：docs(help,security): cross-reference auth list and trusted-env-proxy；fix: proxy direct APNs HTTP2 sessions；fix: guard debug proxy CONNECT under managed proxy；docs: clarify IRC managed proxy coverage；docs: move incident response plan；chore(security): remove stale secret baseline；feat: add proxy validation command；Update SECURITY.md

### Dimension evidence

- `tests-docs-修复-guard-debug-proxy-CONNECT-under-managed-proxy` / 修复 guard debug proxy CONNECT under managed proxy:
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs-修复-proxy-direct-APNs-HTTP2-sessions` / 修复 proxy direct APNs HTTP2 sessions:
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs-修改-Update-SECURITY-md` / 修改 Update SECURITY.md:
  - source: `path` [M] `SECURITY.md` — semantic cue
- `tests-docs-文档同步-clarify-IRC-managed-proxy-coverage` / 文档同步 clarify IRC managed proxy coverage:
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs-文档同步-clarify-managed-proxy-routing-hooks` / 文档同步 clarify managed proxy routing hooks:
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs-文档同步-help-security-cross-reference-auth-list-an` / 文档同步 help,security cross-reference auth list and trusted-env-proxy:
  - source: `path` [M] `SECURITY.md` — semantic cue
  - source: `path` [M] `docs/security/CONTRIBUTING-THREAT-MODEL.md` — semantic cue
  - source: `path` [M] `docs/security/THREAT-MODEL-ATLAS.md` — semantic cue
  - source: `path` [M] `docs/security/incident-response.md` — semantic cue
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs-文档同步-move-incident-response-plan` / 文档同步 move incident response plan:
  - source: `path` [M] `INCIDENT_RESPONSE.md` — semantic cue
  - source: `path` [M] `docs/security/incident-response.md` — semantic cue
- `tests-docs-文档同步-security-clarify-disclosure-policy` / 文档同步 security clarify disclosure policy:
  - source: `path` [M] `SECURITY.md` — semantic cue
  - source: `path` [M] `docs/security/CONTRIBUTING-THREAT-MODEL.md` — semantic cue
  - source: `path` [M] `docs/security/THREAT-MODEL-ATLAS.md` — semantic cue
  - source: `path` [M] `docs/security/incident-response.md` — semantic cue
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs-新增-add-proxy-validation-command` / 新增 add proxy validation command:
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs-维护调整-security-remove-stale-secret-baseline` / 维护调整 security remove stale secret baseline:
  - source: `path` [M] `SECURITY.md` — semantic cue
  - source: `path` [M] `docs/security/CONTRIBUTING-THREAT-MODEL.md` — semantic cue
  - source: `path` [M] `docs/security/THREAT-MODEL-ATLAS.md` — semantic cue
  - source: `path` [M] `docs/security/incident-response.md` — semantic cue
  - source: `path` [M] `docs/security/network-proxy.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `INCIDENT_RESPONSE.md` — docs evidence
  - source: `path` [M] `SECURITY.md` — docs evidence
  - source: `path` [M] `docs/security/CONTRIBUTING-THREAT-MODEL.md` — docs evidence
  - source: `path` [M] `docs/security/THREAT-MODEL-ATLAS.md` — docs evidence
  - source: `path` [M] `docs/security/incident-response.md` — docs evidence
  - source: `path` [M] `docs/security/network-proxy.md` — docs evidence

### 路径证据

- 新增 `docs/security/network-proxy.md`：调整 network proxy docs（docs）。
- 修改 `SECURITY.md`：调整 SECURITY docs（docs）。
- 修改 `docs/security/CONTRIBUTING-THREAT-MODEL.md`：调整 CONTRIBUTING THREAT MODEL docs（docs）。
- 修改 `docs/security/THREAT-MODEL-ATLAS.md`：调整 THREAT MODEL ATLAS docs（docs）。
- 重命名 `INCIDENT_RESPONSE.md`：调整 INCIDENT RESPONSE docs（docs）。
- 重命名 `docs/security/incident-response.md`：调整 incident response docs（docs）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/security` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/security/change-to-test.md` 的验证建议。
