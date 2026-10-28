# Furniture App

Furniture App is a mobile furniture marketplace application built with React Native, Expo, Expo Router, and TypeScript.

The application allows users to browse furniture products, search and filter listings, view product details, explore favorites, and manage a mock user profile. It also demonstrates HTTP requests to an external REST API.

This project was developed as part of a software development course.

## Features

- Splash screen with Sign In and Sign Up navigation
- Sign In and Sign Up forms with required-field validation
- Bottom tab navigation between Home, Favorites, and Profile
- Furniture product catalog with images, names, and prices
- Product search and category filtering
- Detailed product views with an image carousel
- Favorites page with sample products
- Profile and Settings screens
- My Listings page
- Create Listing form with image selection
- Logout navigation back to Sign In
- HTTP GET request to Fake Store API

## Technologies

| Technology | Purpose |
|---|---|
| React Native | Mobile application development |
| Expo SDK 58 | Development environment and native features |
| TypeScript | Type-safe JavaScript |
| Expo Router | File-based navigation |
| Expo Image | Image display and loading |
| Expo ImagePicker | Selecting photos from the device |
| Axios | HTTP requests |
| Bun | Dependency management and project scripts |

## Prerequisites

To run the application, install:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) — version 22.13 or newer
- [Bun](https://bun.sh/)
- [Expo Go](https://expo.dev/go) on an iOS or Android device

Development is supported on macOS, Windows, and Linux. An iOS Simulator requires macOS and Xcode.

## Installation

Clone the repository:

```bash
git clone https://github.com/attamme/furniture-app.git
cd furniture-app
```

Install dependencies:

```bash
bun install --frozen-lockfile
```

## Running the application

Start the Expo development server:

```bash
bun run start
```

Open the application using Expo Go by scanning the QR code displayed in the terminal.

The computer and mobile device should normally be connected to the same network. If the device cannot connect, use:

```bash
bunx expo start --tunnel
```

### Android emulator

Install Android Studio, configure an Android emulator, then run:

```bash
bun run android
```

### iOS Simulator

On macOS, install Xcode and configure an iOS Simulator, then run:

```bash
bun run ios
```

### Web

For a web preview:

```bash
bun run web
```

The application is primarily designed for mobile devices.

## Application structure

```text
app/
  (auth)/             Splash, Sign In, Sign Up
  (tabs)/             Home, Favorites, Profile
    profile/          Settings, My Listings, New Listing
  product/            Product Details
components/           Reusable UI components
data/                 Sample furniture products and categories
lib/                  HTTP client and API utilities
styles/               Shared styles and colors
assets/               Images and other static assets
```

Expo Router automatically generates navigation routes based on the files inside `app/`.

## Authentication

Sign In and Sign Up are implemented as mock authentication forms.

Users must fill in the required fields before proceeding, but their credentials are not validated against a production backend.

Logout returns the user to the Sign In screen.

The project also contains API utilities prepared for backend integration. A working authentication backend is not required to use the current application.

## Products and HTTP requests

The main furniture catalog uses local sample data from `data/products.ts`.

The Home screen also demonstrates an HTTP GET request using Axios:

```http
GET https://fakestoreapi.com/products?limit=4
```

The response contains product information such as identifiers, names, prices, and image URLs.

Fetched products are displayed separately from the main furniture catalog. If the request fails, the application provides a retry option.

An internet connection is required for external product images and API requests.

## Other functionality

**Favorites:** Displays sample products. Full synchronization with the product catalog is not implemented.

**Product Details:** Displays additional product information and images. The Contact Seller feature uses a demonstration email address.

**Settings:** Shows editable personal information. Changes are currently local to the screen.

**My Listings:** Displays sample user listings.

**Create Listing:** Provides a form for entering product information and selecting images. New listings are not yet saved to a backend or persistent database.

## Testing and code quality

Run TypeScript validation:

```bash
bunx tsc --noEmit
```

Run ESLint:

```bash
bun run lint
```

Check Expo dependency compatibility:

```bash
bunx expo-doctor
```

The application should also be tested manually in Expo Go, including navigation, forms, product filtering, image loading, and the HTTP request.

## Known limitations

- Authentication is simulated.
- Furniture listings are sample data.
- Favorites and user listings are not fully persistent.
- Some external image URLs may become unavailable.
- Product creation does not upload data to a server.
- An internet connection is required for the HTTP demo.

## References

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Fake Store API](https://fakestoreapi.com/)
- [Bun](https://bun.sh/)