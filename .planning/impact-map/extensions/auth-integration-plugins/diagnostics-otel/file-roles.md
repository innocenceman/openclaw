# Diagnostics OpenTelemetry Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                   | Role                                                                                                                     | Impact notes                                                                                   |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `extensions/diagnostics-otel/openclaw.plugin.json`, `package.json`, `index.ts` | Manifest/package/service registration contract for the diagnostics exporter plugin.                                      | Plugin enablement, install surface, and runtime service registration.                          |
| `extensions/diagnostics-otel/src/service.ts`                                   | Main service implementation for OTLP traces/metrics/logs, diagnostic event subscription, and log transport registration. | Highest-risk file for exporter startup, event fan-out, and redaction behavior.                 |
| `extensions/diagnostics-otel/api.ts`                                           | Local barrel for the narrowed plugin-SDK diagnostics surface.                                                            | Boundary changes can affect both this plugin and consumers such as Matrix logger integrations. |
| `extensions/diagnostics-otel/src/service.test.ts`                              | Nearest local regression anchor for exporter setup, event handling, and shutdown behavior.                               | First stop before widening to boundary tests or runtime/package checks.                        |
