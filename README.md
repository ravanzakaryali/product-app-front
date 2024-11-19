
# Product App Frontend

This is the frontend project for the Product App, built with **Angular 18** and integrated with **NgRx** for state management. It supports server-side rendering (SSR) using **Express.js** and is configured for development and production builds.

---

## Prerequisites

Ensure you have the following installed:
- **Node.js**: v18.x or later
- **Angular CLI**: v18.2.7 or later
- **npm**: v8.x or later

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/product-app-front.git
   cd product-app-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Scripts

Here are the available scripts you can run using `npm run`:

### Development

- **Start the development server**:
  ```bash
  npm run start
  ```
  Opens the application in development mode at `http://localhost:4200`.

- **Watch for changes**:
  ```bash
  npm run watch
  ```
  Builds the application in development mode and rebuilds on file changes.

### Testing

- **Run unit tests**:
  ```bash
  npm run test
  ```

### Production

- **Build the production version**:
  ```bash
  npm run build
  ```
  Compiles the app for production in the `dist/` directory.

- **Start the SSR server**:
  ```bash
  npm run serve:ssr:product-app-front
  ```
  Starts the server for SSR. The app will be available at `http://localhost:4000` (default port).

---

## Project Structure

### Key Dependencies
- **Angular**: Core framework for building the frontend.
- **NgRx**: State management library for reactive state.
  - `@ngrx/store`, `@ngrx/effects`, and `@ngrx/store-devtools` are included.
- **Express.js**: Server-side rendering setup.
- **RxJS**: Reactive programming utilities.
- **Zone.js**: Angular's change detection mechanism.

### Development Tools
- **@angular/cli**: Angular command-line tools.
- **Karma**: Test runner.
- **Jasmine**: Testing framework.
- **TypeScript**: Language used for development.

---

## Build and Deployment

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Deploy the Application**:
   Copy the `dist/` folder to your server or hosting environment.

3. **Start SSR Server**:
   Ensure `node` is installed on the server and run:
   ```bash
   npm run serve:ssr:product-app-front
   ```

---

## Development Tips

1. Use **NgRx DevTools** for debugging state in development mode. Install the [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

2. Run the application in development mode for faster feedback:
   ```bash
   npm run start
   ```

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.
