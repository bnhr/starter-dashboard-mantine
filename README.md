# Starter Dashboard

The Starter Dashboard is a Single Page Application (SPA) designed to accelerate dashboard development using Mantine and Tanstack Table. This project aims to provide developers with a solid foundation, allowing them to focus more on data presentation and business logic rather than basic setup and configuration.

A Single Page Application Dashboard loads a single HTML page and dynamically updates content as the user interacts with the app. This approach offers a fluid, app-like experience with faster navigation and reduced server load.

## Features

- Lightning-fast development with Vite.
- Modern React setup with TypeScript support for SPAs.
- Pre-configured Components: Mantine UI library and CSS Modules are pre-configured, accelerating UI development.
- Efficient client-side state management using Zustand.
- Optimized data fetching with Tanstack Query.
- Consistent code style enforced by ESLint and Prettier.
- Focus on Single Page Application (SPA) architecture.

## Getting Started

### Prerequisites

- Node.js (version 20 or later)
- PNPM, NPM, or Yarn

### Installation

Choose your preferred package manager:

#### Using PNPM (recommended)

```bash
git clone https://github.com/bnhr/starter-dashboard-mantine.git your-project-name
cd your-project-name
pnpm install
pnpm run dev
```

#### Using NPM

```bash
git clone https://github.com/bnhr/starter-dashboard-mantine.git your-project-name
cd your-project-name
npm install
npm run dev
```

#### Using Yarn

```bash
git clone https://github.com/bnhr/starter-dashboard-mantine.git your-project-name
cd your-project-name
yarn
yarn dev
```

After installation, make sure to remove the Git history to start fresh:

```bash
rm -rf .git
```

## Essential Technologies

- **React 18**: The latest version of React for building user interfaces, offering improved performance and new features for SPAs.
- **TypeScript**: Adds static typing to JavaScript, enhancing code quality and developer productivity in large-scale SPA projects.
- **Mantine**: A fully featured React component library.
- **Prettier**: Ensures consistent code formatting.
- **ESLint**: Identifies and fixes code quality issues, using the new ESLint flat config for improved performance.
- **Zustand**: A minimal state management solution that simplifies complex state logic in SPAs.
- **Tanstack Query**: Powerful data synchronization for React, optimizing client-side data fetching and caching in SPAs.

## Development

After installation, you can start developing your SPA project:

1. Run the development server: `pnpm run dev`
2. Open your browser and visit `http://localhost:5173`
3. Start editing the files in the `src` directory. The changes will be reflected in real-time.

## Todo

- [ ] Migrate to Biome for faster linting and formatting once it's stable.
- [ ] Integrate Bun as a faster JavaScript runtime alternative to Node.js.
