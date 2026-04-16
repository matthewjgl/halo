# Pomodoro Timer Extension

Standalone Halo extension implemented only with the `Halo` + `View` JavaScript API.

## Files

- `manifest.json` - extension metadata and permissions
- `index.js` - extension logic and UI (compact, minimal, expanded, full)
- `settings.json` - declarative settings schema rendered by the host app

## Notes

- No imports from this app codebase.
- Can be copied to any Halo-compatible extension host.
- Designed to be packaged/distributed independently later (zip/Git release/registry).
