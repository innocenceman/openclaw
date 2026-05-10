# OpenRouter Provider Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                             | Role                                                                                                                                          | Impact notes                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `extensions/openrouter/openclaw.plugin.json`, `package.json`, `index.ts` | Manifest/package/entry contract for auth metadata, provider registration, and runtime wrapper behavior.                                       | Provider auth, install surface, dynamic model routing, and loader behavior. |
| `extensions/openrouter/index.ts`                                         | Core provider implementation: auth method, catalog lookup, dynamic model build, model-capability prefetch, and transport wrapper composition. | Highest fan-out file for runtime model and request behavior.                |
| `extensions/openrouter/onboard.ts`                                       | Default model/config helper for onboarding and auth setup.                                                                                    | Config patch behavior and default-model selection.                          |
| `extensions/openrouter/provider-catalog.ts`                              | Bundled provider catalog seed for OpenRouter entries.                                                                                         | Model picker and provider metadata behavior.                                |
| `extensions/openrouter/index.test.ts`                                    | Nearest local regression anchor, including live-guarded provider resolution tests.                                                            | First stop before widening to commands/model-picker coverage.               |
