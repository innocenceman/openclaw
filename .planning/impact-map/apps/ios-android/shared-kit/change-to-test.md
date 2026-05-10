# Native Shared Kit Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Shared Swift helper or protocol changed | Run the nearest consuming XCTest target plus the relevant native app build path (`pnpm ios:build` or macOS app smoke) | Escalate to multiple native app leaves when protocol or resource packaging changes cross platforms. |
| Shared chat UI changed | Run the nearest native chat regression/smoke in the consuming app | Escalate to broader app-shell validation when rendering or markdown behavior changes. |
| Package manifest/resources changed | Rebuild the affected native consumer(s) | Escalate to all native consumers when target layout or bundled resources change. |

## Validation evidence

No shared-kit builds or tests were run while promoting this leaf. Validation guidance is grounded in the observed package layout and consuming app boundaries.
