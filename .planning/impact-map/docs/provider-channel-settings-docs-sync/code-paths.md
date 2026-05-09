# Provider and Channel Settings Docs Sync Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## Provider docs sync path

1. Provider config/auth/model behavior changes land in extension or onboarding code.
2. Public docs under `docs/providers/**` and shared setup/config pages should be updated to match.
3. Nearby onboarding tests are the first product checks if the docs drift follows a real behavior change.

## Channel settings sync path

1. Channel setup or settings behavior changes land in extension setup surfaces, native settings UI, or web settings loading.
2. Public docs under `docs/channels/**`, shared config reference docs, and setup guidance should be updated together.
3. Setup-surface or channel/onboarding tests become the first product checks when behavior changed.

## Trace rule

A docs-sync issue is multi-home by default. Trace docs pages, web/native settings surfaces, and extension setup helpers together before deciding a leaf is closed or needs a controller exception.
