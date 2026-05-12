# Fixtures and Helpers Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted validation

| Change type                   | First validation                                                                    | Escalation trigger                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Helper behavior changed       | Run direct helper tests plus representative consumer tests found by search.         | Broaden to full `pnpm test` when helper fan-out is broad.                                          |
| Fixture/contract file changed | Run every test that references the fixture path or fixture name.                    | Do not update inventory/baseline/expected-failure files merely to silence checks without approval. |
| Mock changed                  | Run tests consuming the mock and one adjacent integration-style suite if available. | Broaden when the mock affects shared service boundaries.                                           |

## Evidence limits

No test command was run in this wave; this card defines the smallest validation ladder.
