# Product App

**Product App** is a front-end application built with Angular, designed to perform basic CRUD operations for products. The project utilizes NgRx (Redux) for state management and follows a modular Angular architecture.

## Features

- Display a list of products  
- Create new products  
- Edit existing products  
- Delete products  

## Technologies Used

- **Angular 18.2**: Front-end framework  
- **NgRx (Redux)**: State management  
- **Express**: Server-Side Rendering (SSR)  
- **TypeScript**: For strongly-typed development  

## Installation

1. Clone the repository:  
  $ git clone <repository-url>
  $ cd product-app-front
   

2. Install dependencies:  
   $ npm install
 

3. Start the development server:  
  $ npm start

   The app will run at `http://localhost:4200`.

## Project Structure

The folder structure is modular, ensuring scalability and maintainability:

```
src/app
├── core
│   ├── directives
│   │   └── unsubscribable-base.directive.ts
│   ├── interfaces
│   │   └── product.interface.ts
│   ├── services
│   │   ├── api.service.ts
│   │   └── product.service.ts
│   └── core.module.ts
├── modules
│   └── product
│       ├── components
│       │   ├── product-list
│       │   └── product-manage
│       ├── product-routing.module.ts
│       └── product.module.ts
├── store
└── app.component.ts
```

### Key Files and Directories

- **Core Module**  
  - Shared utilities and services like `ApiService` and `UnsubscribableBaseDirective`.  

- **Modules**  
  - **Product Module**: Contains components and routing for product management.

- **Store**  
  - State management setup using NgRx, including actions, reducers, effects, and selectors.

## CRUD Operations

1. **Product List**  
   - Displays a list of all products.  
   - Provides navigation links to add or edit products.  

2. **Product Manage**  
   - For the `new` route: A form to create a product.  
   - For the `edit/:id` route: Prefills the form for editing an existing product.  

## State Management with NgRx

- **Actions**: Define operations for loading, creating, updating, and deleting products.  
- **Reducers**: Update state based on dispatched actions.  
- **Effects**: Manage asynchronous API calls.  
- **Selectors**: Simplify state retrieval for components.  

## Scripts

- `npm start`: Starts the development server.  
- `npm run build`: Builds the project for production.  
- `npm run serve:ssr:product-app-front`: Serves the app with SSR enabled.  

## Requirements

- **Node.js**: Version 18 or later.  
- **npm**: Version 8 or later.  

## License

This project is licensed under the MIT License.
