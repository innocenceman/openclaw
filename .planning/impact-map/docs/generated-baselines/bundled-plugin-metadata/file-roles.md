# Bundled Plugin Metadata Baselines File Roles

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                                                | Role                                                        | Evidence state | Impact notes                                                                                   |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| scripts/generate-bundled-plugin-metadata.mjs                                                | Generator/check CLI for bundled plugin metadata.            | deep-partial   | This is the first drift seam when manifests or bundled catalog data change.                    |
| scripts/copy-bundled-plugin-metadata.mjs and scripts/runtime-postbuild.mjs                  | Postbuild copy/staging path for bundled metadata.           | partial        | Build output and packaged runtime shape can drift here even when generator logic is unchanged. |
| src/plugins/bundled-plugin-metadata.generated.ts and src/plugins/bundled-plugin-metadata.ts | Checked-in generated runtime metadata and accessor surface. | partial        | Downstream effect is runtime discovery/catalog behavior, not only docs drift.                  |

## Update rule

If a new generator, checked-in artifact, or guard test becomes part of this drift loop, add it here before treating the leaf as closed.
