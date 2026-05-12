# Planning State

- Current baseline version: `v2026.5.4`
- Current baseline source SHA: `325df3efefe9c0887d9357732e68fc8556e78d79`
- Current planning ref: `refs/planning/v2026.5.4`
- Previous planning ref: `refs/planning/v2026.4.24`
- Transition artifacts: `.planning/version-diff/v2026.4.24...v2026.5.4/`
- Direction: `sidegrade-recovery`

Active `.planning` describes the target `v2026.5.4` source version. Historical `v2026.4.24` planning facts are preserved through `refs/planning/v2026.4.24` and the version-diff artifact set. This transition was explicitly authorized as sidegrade recovery because the `v2026.5.4` release line is not a descendant of the `v2026.4.24` release commit.
