# Plugin SDK Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Leaf directory      | Coverage                   | Purpose                                                                                              |
| ------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------- |
| `public-subpaths/`  | `verified`                 | Public SDK subpath exports, root alias behavior, and runtime-API guardrails.                         |
| `provider-sdk/`     | `verified`                 | Provider entry, auth, model, stream, usage, and onboarding SDK contracts.                            |
| `channel-sdk/`      | `verified`                 | Channel plugin contracts, config/setup/status helpers, policy helpers, and reply pipeline SDK seams. |
| `tool-sdk/`         | `verified`                 | Tool/send/web-search/action SDK helpers used by plugin tools and provider integrations.              |
| `media-memory-sdk/` | `verified`                 | Media, media-understanding, memory, speech, and related helper contracts.                            |
| `api-drift/`        | `exceptioned-deep-partial` | SDK API baseline generation/check surfaces.                                                          |

## Split rule

Split deeper only when a child file group gains independent behavior, ownership, or a distinct first-test ladder.
