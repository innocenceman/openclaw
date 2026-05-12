# Web App Shell and Lifecycle File Roles

Coverage: `exceptioned-deep-partial`

| Role                | Paths                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| Primary owners      | `ui/src/ui/app.ts`, `app-lifecycle.ts`, `app-gateway.ts`, `app-polling.ts`, `app-view-state.ts`           |
| Shared dependencies | `ui/src/ui/controllers/**`, `ui/src/ui/views/**`, `ui/src/i18n/**`, and gateway HTTP/WebSocket contracts. |
| Tests               | Matching `ui/src/ui/*.test.ts`, `*.node.test.ts`, and `*.browser.test.ts` files.                          |
