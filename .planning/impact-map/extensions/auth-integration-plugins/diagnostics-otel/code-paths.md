# Diagnostics OpenTelemetry Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Service registration path

```text
openclaw.plugin.json -> package.json -> index.ts
  -> registerService(createDiagnosticsOtelService())
```

Impact: Plugin enablement and service startup registration.

## 2. OTLP startup path

```text
src/service.ts
  -> diagnostics config lookup
  -> endpoint normalization
  -> NodeSDK / OTLP exporters / LoggerProvider startup
```

Impact: Exporter URLs, protocol gating, sampling, and SDK startup failure behavior.

## 3. Diagnostic event path

```text
src/service.ts
  -> onDiagnosticEvent()
  -> spans, counters, histograms, attributes
```

Impact: Telemetry mapping for runs, queues, sessions, messages, and webhook events.

## 4. Log transport and shutdown path

```text
src/service.ts
  -> registerLogTransport() / redactSensitiveText()
  -> OTLP log exporter
  -> stop callbacks
```

Impact: Log redaction, log export, cleanup, and service shutdown behavior.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `4` changed path(s) to this final leaf. `4` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 3, 'A': 1}`.

- `extensions/diagnostics-otel/package.json`
- `extensions/diagnostics-otel/src/service.test.ts`
- `extensions/diagnostics-otel/src/service.ts`
- `extensions/diagnostics-otel/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/diagnostics-otel/api.ts`
- `extensions/diagnostics-otel/openclaw.plugin.json`
- `extensions/diagnostics-otel/package.json`
- `extensions/diagnostics-otel/src/service.test.ts`
- `extensions/diagnostics-otel/src/service.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
