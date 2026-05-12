# Ref anchors for v2026.4.24...v2026.5.4

## Source commits

| Version      | Source SHA                                 | Notes                                                                  |
| ------------ | ------------------------------------------ | ---------------------------------------------------------------------- |
| `v2026.4.24` | `cbcfdf62c7297bda66009ea7476f053c3e9addab` | Baseline source recorded in `current-baseline.json` before transition. |
| `v2026.5.4`  | `325df3efefe9c0887d9357732e68fc8556e78d79` | Target source commit for the 5.4 planning refresh.                     |

## Planning refs

| Version      | Planning ref               | Commit SHA                                 | Notes                                                                                                             |
| ------------ | -------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `v2026.4.24` | `refs/planning/v2026.4.24` | `49dc713f0a44f13d52c495877fa58e0364be459d` | Preserved baseline planning/intelligence anchor.                                                                  |
| `v2026.5.4`  | `refs/planning/v2026.5.4`  | resolved after final commit                | Must point at the single planning/intelligence commit whose parent is `325df3efefe9c0887d9357732e68fc8556e78d79`. |

## Final topology requirement

```text
325df3efefe9c0887d9357732e68fc8556e78d79  # v2026.5.4 source
  -> <one planning/intelligence commit>  # refs/planning/v2026.5.4
```

The target planning commit is intentionally not embedded as a fixed SHA in
`manifest.json` before creation; resolve it through `refs/planning/v2026.5.4`
after the final squash.
