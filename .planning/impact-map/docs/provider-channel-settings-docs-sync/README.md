# Provider and Channel Settings Docs Sync

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 GitNexus/code-review-graph bounded slice plus targeted docs/script checks

## Scope

Leaf module for the docs and adjacent product/config surfaces that must stay aligned when provider lists, channel settings, setup surfaces, or settings UIs change.

## Observed facts

- Provider docs live primarily under `docs/providers/**`, channel docs under `docs/channels/**`, and shared configuration semantics under `docs/gateway/configuration-reference.md` plus adjacent tools/setup pages.
- Web settings loading is anchored in `ui/src/ui/app-settings.ts`, while macOS channel settings UI lives under `apps/macos/Sources/OpenClaw/ChannelsSettings*.swift`.
- Repo-native inspection found 21 extension setup surfaces at `extensions/*/src/setup-surface.ts`, which form the plugin-side onboarding/settings seam for many channels.
- Tests such as `src/commands/onboard-auth.test.ts`, `src/commands/onboard-search.test.ts`, and channel/plugin setup-surface tests are the nearby behavior checks when docs drift follows a real settings change.

## Incoming dependencies

- Provider/channel capability changes in extensions, onboarding helpers, or settings UIs.
- Config schema/help changes that alter how settings are named or explained in docs.

## Outgoing dependencies

- Public provider/channel docs, onboarding guidance, and web/macOS settings surfaces must tell the same story.
- When docs drift trails a behavior change, targeted onboarding/setup-surface tests are the first product checks to consider.

## Risk triggers

- Changing provider or channel lists in one surface but not the others.
- Renaming settings labels or auth/setup steps without touching docs and setup surfaces together.
- Forgetting that built-in and extension channel surfaces both participate in docs-sync work.

## Validation status

This leaf is `exceptioned-deep-partial`: G008 ran docs links/glossary/format checks and reused G007 UI/settings evidence, but no dedicated provider/channel cross-surface parity checker exists for a full verified claim.
