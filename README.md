# Furniture App

A furniture marketplace mobile application built with **React Native, Expo, Expo Router and TypeScript**, using **Bun** for dependencies and scripts.

## Technology

- **Expo SDK 58** and React Native
- **React** and **TypeScript** (strict mode)
- **Expo Router** for file-based navigation
- **Bun** for package installation and script execution

## Prerequisites

Development is supported on **macOS, Windows and Linux**.

Install:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (version 22.13 or newer)
- [Bun](https://bun.sh/docs/installation)

**macOS / Linux** - install Bun:

```bash
curl -fsSl https://bun.sh/install | bash
```

**Windows (PowerShell)** - install Bun:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

## Installation

```bash
git clone https://github.com/attamme/furniture-app.git
cd furniture-app
bun install --frozen-lockfile
```

## Run the app

Start the development server:

```bash
bun run start
```

**On a phone (iOS / Android):**

1. Install **Expo Go** and sign in.
2. Sign in to Expo on your computer with `bunx expo login`.
3. Connect your phone and computer to the same Wi-Fi network.
4. Scan the QR code shown in the terminal.

**Android emulator (macOS / Windows / Linux):**

1. Install [Android Studio](https://developer.android.com/studio) and set up an emulator.
2. Start the emulator and run `bun run android`.

**iOS Simulator (macOS only):**

1. Install Xcode and an iOS Simulator.
2. Run `bun run ios`.

**Web preview:**

```bash
bun run web
```

## Project structure

```text
app/                  Screens and navigation (Expo Router)
  (auth)/             Welcome and sign-up screens
components/           Reusable UI components
styles/               Styles and colors
assets/images/        Local image assets
app.json              Expo configuration
package.json          Dependencies and scripts
bun.lock              Bun lockfile
bunfig.toml           Bun installation settings
tsconfig.json          TypeScript configuration
eslint.config.js      ESLint configuration
```

## References

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Bun documentation](https://bun.sh/docs)
