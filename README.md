<p align="center">
  <img src="assets/logo.png" width="96" height="96" alt="Halo" />
</p>

<h1 align="center">Halo</h1>

<p align="center">
  Transform your Mac's notch into a live, interactive island.<br />
  Now Playing · Battery · Weather · Calendar · Notifications · Extensions
</p>

<p align="center">
  <a href="https://github.com/matthewjgl/halo/releases">Releases</a>
</p>

---

## Requirements

- macOS 14 Sonoma or later
- Xcode 15+
- [XcodeGen](https://github.com/yonaskolb/XcodeGen) — `brew install xcodegen`
- Node.js 18+ (only needed to work on extensions)

---

## Setup

```bash
git clone https://github.com/matthewjgl/halo.git
cd halo
xcodegen generate
open Halo.xcodeproj
```

Select the `Halo` scheme, choose your Mac as the destination, and hit Run.

> On first launch the app will ask for Accessibility, Calendar, and Location permissions. These are required for the relevant modules to work.

---

## Building a release DMG

Requires a Developer ID certificate and notarization credentials. Copy `.env.example` to `.env` and fill in:

```
APPLE_ID=you@example.com
APP_SPECIFIC_PASSWORD=xxxx-xxxx-xxxx-xxxx
TEAM_ID=XXXXXXXXXX
SIGNING_IDENTITY=Developer ID Application: Your Name (TEAMID)
```

Then run:

```bash
./scripts/build-and-release.sh
```

This archives, exports, notarizes, and produces a signed `build/Halo.dmg`.

For a quick unsigned local build:

```bash
./scripts/build-dmg.sh
```

---

## Project structure

```
Halo/
  App/              AppDelegate, AppState
  Modules/          Built-in modules (Battery, NowPlaying, Weather, …)
  Settings/         Settings window views
  Utilities/        UpdateChecker, AutoUpdater, helpers
  Views/            CompactView, ExpandedView, IslandWindow
ExtensionHost/      JS runtime, extension manager, bridge
Extensions/         Bundled extensions (pomodoro, whatsapp-web, …)
scripts/            Build & release scripts
```

---

## Extensions

Extensions are JavaScript packages that run inside a sandboxed JavaScriptCore context. See [EXTENSIONS.md](EXTENSIONS.md) for the full guide.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Updates

Halo checks for updates automatically on launch. When a new version is available a dialog appears — click **Update** to download and install without reinstalling.
