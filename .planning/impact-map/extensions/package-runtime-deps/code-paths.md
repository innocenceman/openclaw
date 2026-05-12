# Package Runtime Dependencies Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## 1. Install-on-demand path

```text
plugin package install
  -> npm install --omit=dev inside extension directory
  -> index.ts and src/** production imports
  -> dependencies / peerDependencies / SDK aliases must resolve
```

Impact: plugin install success, runtime import resolution, package-local dependency ownership.

## 2. Build and stage path

```text
extension entrypoints
  -> scripts/lib/bundled-plugin-build-entries.mjs
  -> scripts/stage-bundled-plugin-runtime.mjs
  -> staged runtime/package artifacts
```

Impact: bundled plugin packaging, runtime file inclusion, published plugin install surface.

## 3. Plugin-local runtime bootstrap path

```text
extension runtime loader (example: memory-lancedb/lancedb-runtime.ts)
  -> resolve state dir / runtime manifest
  -> import bundled dep or install fallback runtime via npm
  -> load resolved runtime entry
```

Impact: plugin-local dependency fallback, state-dir writes, Nix-mode behavior, runtime startup failures.

## 4. Release/package path

```text
package metadata + runtime deps
  -> release:plugins:npm:check / plugin release tests
  -> publish readiness (approval-only)
```

Impact: npm package correctness, minimum host version, install metadata, exported runtime contents.

## 5. Dynamic import path

```text
lazy provider/client/runtime boundary
  -> dedicated runtime module
  -> pnpm build
  -> inspect dynamic import warnings
```

Impact: published/build output and runtime module loading safety.
