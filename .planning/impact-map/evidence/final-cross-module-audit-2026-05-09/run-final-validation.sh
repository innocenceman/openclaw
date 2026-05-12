#!/usr/bin/env bash
set +euo pipefail
LOG_DIR=".planning/impact-map/evidence/final-cross-module-audit-2026-05-09/logs"
mkdir -p "$LOG_DIR"
run() {
  local name="$1"; shift
  echo "### $name"
  echo "$*" > "$LOG_DIR/$name.cmd"
  timeout 260s "$@" > "$LOG_DIR/$name.log" 2>&1
  local code=$?
  echo "$code" > "$LOG_DIR/$name.exit"
  echo "exit=$code"
  tail -n 40 "$LOG_DIR/$name.log"
  echo
}
run path-safety pnpm test -- \
  src/agents/sandbox/fs-paths.test.ts \
  src/agents/sandbox/host-paths.test.ts \
  src/agents/sandbox/fs-bridge.boundary.test.ts \
  src/agents/sandbox/fs-bridge.anchored-ops.test.ts \
  src/agents/sandbox/fs-bridge-mutation-helper.test.ts
run workspace-browser-ssh pnpm test -- \
  src/agents/sandbox/workspace.test.ts \
  src/agents/sandbox/workspace-mounts.test.ts \
  src/agents/sandbox/browser.create.test.ts \
  src/agents/sandbox/browser.novnc-url.test.ts \
  src/agents/sandbox/ssh.test.ts \
  src/agents/sandbox/ssh-backend.test.ts \
  src/agents/sandbox/docker.execDockerRaw.enoent.test.ts \
  src/agents/sandbox/docker.windows.test.ts
run provider-params-streams pnpm test -- \
  src/agents/pi-embedded-runner/extra-params.google.test.ts \
  src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts \
  src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts \
run skills-install-refresh pnpm test -- \
  src/agents/skills-install.test.ts \
  src/agents/skills-install.download.test.ts \
  src/agents/skills-install-fallback.test.ts \
  src/agents/skills/filter.test.ts \
  src/agents/skills/frontmatter.test.ts \
  src/agents/skills/refresh.test.ts
run docs-check pnpm check:docs
run package-check timeout 180s pnpm release:openclaw:npm:check
run build-check timeout 260s pnpm build
