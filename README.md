
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
   git clone https://github.com/ravanzakaryali/product-app-front
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


---

## Libraries Used

### Dependencies
- **@angular/animations**: Provides animation capabilities for Angular components.
- **@angular/common**: Includes common directives and services like `NgIf` and `NgFor`.
- **@angular/compiler**: Handles Angular template compilation.
- **@angular/core**: Core library for Angular applications.
- **@angular/forms**: Supports template-driven and reactive forms.
- **@angular/platform-browser**: Contains browser-specific services and directives.
- **@angular/platform-browser-dynamic**: Bootstraps the Angular application in a browser.
- **@angular/router**: Implements routing and navigation between views.
- **@ngrx/effects**: Manages side effects in NgRx state management.
- **@ngrx/store**: State management library for Angular.
- **@ngrx/store-devtools**: DevTools for debugging NgRx state.
- **express**: Server framework for handling SSR.
- **rxjs**: Reactive programming utilities.
- **zone.js**: Angular's zone-based change detection mechanism.

### DevDependencies
- **@angular-devkit/build-angular**: CLI tools for building Angular applications.
- **@angular/cli**: Command-line interface for Angular projects.
- **@angular/compiler-cli**: CLI for Angular's AOT compiler.
- **@types/express**: Type definitions for Express.js.
- **@types/jasmine**: Type definitions for Jasmine testing framework.
- **@types/node**: Type definitions for Node.js.
- **jasmine-core**: Jasmine testing framework.
- **karma**: Test runner for Angular projects.
- **karma-chrome-launcher**: Chrome launcher for Karma.
- **karma-coverage**: Code coverage reporter for Karma.
- **karma-jasmine**: Jasmine adapter for Karma.
- **karma-jasmine-html-reporter**: HTML reporter for Jasmine tests.
- **typescript**: Superset of JavaScript for static typing.
