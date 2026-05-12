# Anthropic Provider Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                            | Role                                                                                                                             | Impact notes                                                                     |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `extensions/anthropic/openclaw.plugin.json`, `package.json`, `index.ts` | Manifest/package/entry contract for auth choice metadata, provider registration, and model/auth behavior.                        | Catalog, onboarding, auth prompts, profile migration, and provider availability. |
| `extensions/anthropic/index.ts`                                         | Core provider implementation: setup-token flow, API-key auth, model alias forward-compat, doctor hinting, and capability wiring. | Highest fan-out file for auth and model-resolution behavior.                     |
| `extensions/anthropic/media-understanding-provider.ts`                  | Anthropic media-understanding registration for image capability.                                                                 | Shared media registry and image-description behavior.                            |
