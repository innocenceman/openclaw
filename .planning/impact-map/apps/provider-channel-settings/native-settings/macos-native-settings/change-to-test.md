# macOS Native Settings Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Run Android settings/unit coverage with `pnpm android:test` and `pnpm android:assemble` when Android settings change.
2. Run macOS settings smoke tests on a Mac when macOS settings change.
3. Run iOS XCTest/build on Xcode simulator or real device when iOS settings change.
4. Run `pnpm --dir ui test` and `pnpm ui:build` when web parity changes.

G007 exception: macOS/Xcode settings smoke unavailable here.
