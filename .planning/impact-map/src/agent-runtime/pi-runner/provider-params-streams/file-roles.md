# Provider Params Streams File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

| Representative paths                                                                                                                                                                                                | Responsibility                                                                           | First validation                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `src/agents/pi-embedded-runner/extra-params*.ts`, `src/agents/pi-embedded-runner/*-stream-wrappers.ts`, `src/agents/pi-embedded-runner/google.ts`, `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts` | Provider-specific params, stream wrappers, tool payload shaping, and model capabilities. | provider-specific extra-param/stream-wrapper targeted tests |
