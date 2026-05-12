# GitNexus Refresh Evidence

Generated: 2026-05-08

## Freshness

`mcp__gitnexus__.list_repos` reported the indexed `openclaw` repository at commit `f99ef11b272bcd5aadaa9e1a1f07f7fd82b8d6cc`, matching current `HEAD`.

```text
repo: openclaw
indexedAt: 2026-05-08T04:16:05.688Z
lastCommit: f99ef11b272bcd5aadaa9e1a1f07f7fd82b8d6cc
files: 9115
nodes: 140010
edges: 210569
processes: 300
```

## Bounded P0 samples

| Symbol                 | Slice                          | Result                                                                                                                                             |
| ---------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runBootOnce`          | `src/gateway/boot.ts`          | LOW risk; 1 direct test caller; 0 affected processes.                                                                                              |
| `buildAgentSessionKey` | `src/routing/resolve-route.ts` | CRITICAL risk; 37 impacted symbols; 7 direct callers; 9 affected modules; 0 affected processes.                                                    |
| `agentCommand`         | `src/agents/agent-command.ts`  | MEDIUM risk; 15 impacted symbols; 12 direct callers; Agents module only; 0 affected processes.                                                     |
| `createDefaultDeps`    | `src/cli/deps.ts`              | HIGH risk; 41 impacted symbols; 11 direct callers; 3 affected processes (`startGatewayServer`, `handleOpenResponsesHttpRequest`, `handleRequest`). |
| `loadPluginManifest`   | `src/plugins/manifest.ts`      | LOW risk; 4 direct callers; Plugins module; 0 affected processes.                                                                                  |

## Promotion effect

This clears the previous `GN-STALE` blocker for P0 evidence. It does not override failing validation commands; leaves with failed mandatory validation remain exceptioned even though GitNexus is fresh.
