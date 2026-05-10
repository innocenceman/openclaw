# Google Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                     | First validation                                                                                                                                                         | Escalation trigger                                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| OAuth or provider auth behavior changed         | `pnpm test -- extensions/google/oauth.test.ts`                                                                                                                           | Add broader onboarding/auth tests if CLI OAuth profile behavior or config defaults change.          |
| Image-generation behavior changed               | `pnpm test -- extensions/google/image-generation-provider.test.ts`                                                                                                       | Add media/provider registry tests if shared image/media registration changes.                       |
| Provider shared schema/message behavior changed | `pnpm test -- extensions/google/google-shared.test.ts`                                                                                                                   | Add provider-stream/model tests if Google request translation or thinking payload behavior changes. |
| Web-search or media capability changed          | `pnpm test -- src/plugins/contracts/web-search-provider.contract.test.ts src/media-understanding/provider-registry.test.ts src/media-understanding/google.video.test.ts` | Escalate to broader provider/media suites when shared registries or defaults change.                |
| Package/build or lazy runtime surface changed   | `pnpm build`                                                                                                                                                             | Inspect dynamic import warnings and widen to package/release checks when published surfaces change. |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
