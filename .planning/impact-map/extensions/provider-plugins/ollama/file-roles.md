# Ollama Provider Plugin File Roles

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                         | Role                                                                                                                    | Impact notes                                                                     |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `extensions/ollama/openclaw.plugin.json`, `package.json`, `index.ts` | Manifest/package/entry contract for provider registration, local auth choice, docs path, and discovery/wizard behavior. | Auth setup, local-vs-remote base URL behavior, and package/install surface.      |
| `extensions/ollama/index.ts`                                         | Custom auth, discovery, wizard setup/model picker, and model-pull hook.                                                 | Single highest-risk file for Ollama config, discovery, and runtime side effects. |
| `extensions/ollama/index.test.ts`                                    | Nearest local regression anchor for auth/config/discovery/model-pull behavior.                                          | First stop before widening to shared auth-choice or onboarding tests.            |
