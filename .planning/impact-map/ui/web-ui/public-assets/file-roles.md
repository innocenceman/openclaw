# Web UI Public Assets File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| File or path                                                                 | Role                                                                     | Evidence state             | Impact notes                                       |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------- | -------------------------------------------------- |
| `ui/index.html`                                                              | HTML entry shell, theme bootstrap script, and module-script mount point. | `exceptioned-deep-partial` | Controls first-paint theme and app mount behavior. |
| `ui/public/favicon.svg`, `ui/public/favicon-32.png`, `ui/public/favicon.ico` | Browser favicon assets.                                                  | `exceptioned-deep-partial` | Browser-tab branding and static asset serving.     |
| `ui/public/apple-touch-icon.png`                                             | Apple touch icon for installed/mobile browser usage.                     | `exceptioned-deep-partial` | Mobile/home-screen branding only.                  |

## Update rule

Keep this leaf asset/boot-shell focused; move runtime logic changes back to `components/`.
