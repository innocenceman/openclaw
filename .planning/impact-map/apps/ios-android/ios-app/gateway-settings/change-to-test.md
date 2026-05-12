# iOS Gateway Settings Change-to-Test

Coverage: `exceptioned-deep-partial`

1. Check for connected real iOS devices before choosing a simulator.
2. Run `pnpm ios:gen` before Xcode build/test validation.
3. Run the closest `apps/ios/Tests/**` XCTest target on an iOS simulator or real device.
4. Run `pnpm ios:build` for app compile when source/project/signing/version surfaces change.

Exception: this G007 run executed on Linux without Xcode, `xcodebuild`, `xcrun`, or connected iOS devices; this leaf remains `exceptioned-deep-partial`.
