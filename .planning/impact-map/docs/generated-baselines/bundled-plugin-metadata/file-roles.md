# Bundled Plugin Metadata Baselines File Roles

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                               | Role                                              | Evidence state | Impact notes                                                                                   |
| -------------------------------------------------------------------------- | ------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| scripts/copy-bundled-plugin-metadata.mjs and scripts/runtime-postbuild.mjs | Postbuild copy/staging path for bundled metadata. | partial        | Build output and packaged runtime shape can drift here even when generator logic is unchanged. |

## Update rule

If a new generator, checked-in artifact, or guard test becomes part of this drift loop, add it here before treating the leaf as closed.
