# Scripts and Packaging Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                     | First validation                                               | Escalation trigger                                                                          |
| ----------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Child packaging leaf changed                    | Start with that leaf's `change-to-test.md`                     | Escalate to broader build/test/docs flows when wrappers or shared helpers are involved.     |
| Shared helper or wrapper changed                | Inspect `package.json` script wiring plus downstream leaf docs | Run the narrowest wrapper command that actually invokes the changed path.                   |
| Operator-facing packaging docs/examples changed | `pnpm check:docs`                                              | Escalate to leaf-specific validation when the docs change claims a changed script behavior. |

## Validation evidence

No commands above were executed during Wave 4. They were selected from current script trees, wrapper references, and docs guides without claiming fresh runtime success.
