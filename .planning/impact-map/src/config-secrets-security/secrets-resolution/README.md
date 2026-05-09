# Secrets Resolution Impact Subtree

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/`
- Subtree: `secrets-resolution/`

## Purpose

Secret reference contracts, target registries, runtime secret collection, gateway/CLI secret resolution, and secret storage/audit helpers.

## Split basis

code-review-graph marked secret-ref coercion, runtime collection, gateway secret resolution, and provider auth storage as high-risk. This subtree is now split by contract boundary instead of treating `src/secrets/**` as one leaf.

Use `leaf-index.md` to choose the narrowest secrets leaf.
