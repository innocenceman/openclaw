#!/usr/bin/env bash
set -u
E=".planning/impact-map/evidence/src-capabilities-shared-verified-wave-2026-05-09/logs"
mkdir -p "$E"
run() {
  local name="$1"; shift
  local log="$E/${name}.log"
  echo "== $name ==" | tee "$log"
  echo "$*" | tee -a "$log"
  local start end status
  start=$(date +%s)
  ( "$@" ) >> "$log" 2>&1
  status=$?
  end=$(date +%s)
  echo "--- exit=$status duration=$((end-start))s ---" | tee -a "$log"
  printf '%s\t%s\t%s\n' "$name" "$status" "$((end-start))" >> "$E/results.tsv"
  return 0
}
: > "$E/results.tsv"
run browser-core timeout 600 pnpm test -- src/browser/bridge-server.auth.test.ts src/browser/browser-utils.test.ts src/browser/cdp-proxy-bypass.test.ts src/browser/cdp-timeouts.test.ts src/browser/cdp.test.ts src/browser/chrome-mcp.snapshot.test.ts src/browser/chrome-mcp.test.ts src/browser/chrome.default-browser.test.ts src/browser/chrome.launch-args.test.ts src/browser/chrome.test.ts src/browser/client-fetch.loopback-auth.test.ts src/browser/client.test.ts src/browser/config.test.ts src/browser/control-auth.auto-token.test.ts src/browser/control-auth.test.ts src/browser/navigation-guard.test.ts src/browser/paths.test.ts src/browser/profiles-service.test.ts src/browser/profiles.test.ts src/browser/proxy-files.test.ts src/browser/pw-role-snapshot.test.ts src/browser/pw-session.connections.test.ts src/browser/pw-session.create-page.navigation-guard.test.ts src/browser/pw-session.get-page-for-targetid.extension-fallback.test.ts src/browser/pw-session.page-cdp.test.ts src/browser/pw-session.test.ts src/browser/pw-tools-core.clamps-timeoutms-scrollintoview.test.ts src/browser/pw-tools-core.interactions.batch.test.ts src/browser/pw-tools-core.interactions.evaluate.abort.test.ts src/browser/pw-tools-core.interactions.set-input-files.test.ts src/browser/pw-tools-core.last-file-chooser-arm-wins.test.ts src/browser/pw-tools-core.screenshots-element-selector.test.ts src/browser/pw-tools-core.snapshot.navigate-guard.test.ts src/browser/pw-tools-core.waits-next-download-saves-it.test.ts src/browser/routes/agent.existing-session.test.ts src/browser/routes/agent.shared.test.ts src/browser/routes/agent.snapshot.plan.test.ts src/browser/routes/agent.snapshot.test.ts src/browser/routes/agent.storage.test.ts src/browser/routes/basic.existing-session.test.ts src/browser/routes/dispatcher.abort.test.ts src/browser/screenshot.test.ts src/browser/server-context.ensure-browser-available.waits-for-cdp-ready.test.ts src/browser/server-context.existing-session.test.ts src/browser/server-context.hot-reload-profiles.test.ts src/browser/server-context.loopback-direct-ws.test.ts src/browser/server-context.remote-profile-tab-ops.test.ts src/browser/server-context.remote-tab-ops.test.ts src/browser/server-context.reset.test.ts src/browser/server-context.tab-selection-state.test.ts src/browser/server-lifecycle.test.ts src/browser/server.agent-contract-form-layout-act-commands.test.ts src/browser/server.agent-contract-snapshot-endpoints.test.ts src/browser/server.auth-fail-closed.test.ts src/browser/server.auth-token-gates-http.test.ts src/browser/server.evaluate-disabled-does-not-block-storage.test.ts src/browser/server.post-tabs-open-profile-unknown-returns-404.test.ts src/browser/session-tab-registry.test.ts src/browser/url-pattern.test.ts
run memory timeout 600 pnpm test -- src/memory/*.test.ts
run media timeout 600 pnpm test -- src/media/*.test.ts src/media-understanding/*.test.ts
run context-cron-tts timeout 900 pnpm test -- src/context-engine/*.test.ts src/cron/**/*.test.ts src/tts/*.test.ts
run startup-daemon-hooks timeout 900 pnpm test -- src/bootstrap/*.test.ts src/daemon/*.test.ts src/hooks/**/*.test.ts
run docs-i18n-markdown-logging timeout 600 pnpm test -- src/docs/*.test.ts src/i18n/*.test.ts src/markdown/*.test.ts src/logging/*.test.ts
run nodehost-process-shared-utils-testsupport timeout 900 pnpm test -- src/node-host/*.test.ts src/process/**/*.test.ts src/shared/**/*.test.ts src/utils/*.test.ts src/test-helpers/*.test.ts src/test-utils/*.test.ts
run product-build timeout 900 pnpm build
run planning-diff-check git diff --check -- .planning
run planning-format-check pnpm exec oxfmt --check .planning/impact-map/src/capability-modules/**/*.md .planning/impact-map/src/shared-misc-runtime-support/**/*.md .planning/impact-map/evidence/src-capabilities-shared-verified-wave-2026-05-09/**/*.md .planning/impact-map/MODULE-INDEX.md .planning/impact-map/COVERAGE-ROADMAP.md .planning/STATE.md
