# tsconfig.json

```json
{
    "compilerOptions": {
      "target": "es5",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
  }
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'federal-blue': '#090446',
          'forest-green': '#4d8b31',
          'imperial-red': '#f71735',
          'ecru': '#e5c687',
        },
      },
    },
    plugins: [],
  }
```

# storybook.log

```log
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: booking-platform@0.1.0
npm error Found: next@13.0.0
npm error node_modules/next
npm error   next@"13.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer next@"^13.5.0 || ^14.0.0" from @storybook/nextjs@8.2.7
npm error node_modules/@storybook/nextjs
npm error   dev @storybook/nextjs@"8.2.7" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error /home/codespace/.npm/_logs/2024-08-18T18_00_42_498Z-eresolve-report.txt

npm error A complete log of this run can be found in: /home/codespace/.npm/_logs/2024-08-18T18_00_42_498Z-debug-0.log

```

# postcss.config.js

```js
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

# package.json

```json
{
  "name": "booking-platform",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "@babel/core": "^7.25.2",
    "@babel/types": "^7.25.2",
    "@mapbox/mapbox-gl-geocoder": "^5.0.2",
    "@maplibre/maplibre-gl-geocoder": "^1.5.0",
    "@next-auth/prisma-adapter": "^1.0.5",
    "@prisma/client": "^4.6.0",
    "@storybook/addon-essentials": "^8.2.9",
    "@storybook/addon-interactions": "^8.2.9",
    "@storybook/addon-links": "^8.2.9",
    "@storybook/addon-onboarding": "^8.2.9",
    "@storybook/codemod": "^8.2.9",
    "@storybook/core": "^8.2.9",
    "@types/bcryptjs": "^2.4.6",
    "@types/semver": "^7.5.8",
    "@yarnpkg/fslib": "^3.1.0",
    "@yarnpkg/libzip": "^3.1.0",
    "ai-digest": "^1.0.5",
    "axios": "^1.1.3",
    "bcryptjs": "^2.4.3",
    "chalk": "^5.3.0",
    "commander": "^12.1.0",
    "cross-spawn": "^7.0.3",
    "detect-indent": "^7.0.1",
    "envinfo": "^7.13.0",
    "execa": "^9.3.1",
    "fd-package-json": "^1.2.0",
    "find-up": "^7.0.0",
    "fs-extra": "^11.2.0",
    "giget": "^1.2.3",
    "globby": "^14.0.2",
    "jscodeshift": "^17.0.0",
    "leven": "^4.0.0",
    "lucide-react": "^0.427.0",
    "mapbox-gl": "^2.11.0",
    "maplibre-gl": "^4.5.2",
    "next": "^14.0.0",
    "next-auth": "^4.15.0",
    "ora": "^8.0.1",
    "prettier": "^3.3.3",
    "prompts": "^2.4.2",
    "react": "18.2.0",
    "react-datepicker": "^7.3.0",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.38.0",
    "recharts": "^2.12.7",
    "semver": "^7.6.3",
    "storybook": "^8.2.9",
    "strip-json-comments": "^5.0.1",
    "swr": "^1.3.0",
    "tailwindcss": "^3.2.1",
    "tempy": "^3.1.0",
    "tiny-invariant": "^1.3.3",
    "ts-dedent": "^2.2.0"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^1.6.1",
    "@storybook/blocks": "^8.2.9",
    "@storybook/nextjs": "^8.2.9",
    "@storybook/react": "^8.2.9",
    "@storybook/test": "^8.2.9",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@types/mapbox-gl": "^2.7.7",
    "@types/maplibre-gl": "^1.14.0",
    "@types/node": "^18.11.7",
    "@types/react": "^18.0.24",
    "@types/react-dom": "^18.0.8",
    "autoprefixer": "^10.4.13",
    "eslint": "^8.26.0",
    "eslint-config-next": "^13.0.0",
    "eslint-plugin-storybook": "^0.8.0",
    "jest": "^29.2.2",
    "postcss": "^8.4.18",
    "prisma": "^4.6.0",
    "typescript": "^4.8.4"
  }
}

```

# next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['your-image-domain.com'], // Add domains for optimized images
    },
    env: {
      MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
    },
  }
  
  module.exports = {
    nextConfig,
    async redirects() {
      return [
        {
          source: '/client',
          destination: '/client/dashboard',
          permanent: true,
        },
        {
          source: '/driver',
          destination: '/driver/dashboard',
          permanent: true,
        },
      ]
    },
  }
```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# README.md

```md

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

#misc for ai
/.storybook
/.vscode
/stories
/.github

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# prisma db
/prisma/dev.db
/prisma/migrations
/prisma/dev.de-journal

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# stryker temp files
.stryker-tmp

*storybook.log

```

# .eslintrc.json

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ]
}

```

# types/next-auth.d.ts

```ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: string
    }
  }
}
```

# types/maplibre-gl-geocoder.d.ts

```ts
declare module '@maplibre/maplibre-gl-geocoder' {
    import { IControl, Map } from 'maplibre-gl';
  
    export interface GeocoderOptions {
      forwardGeocode?: (config: { query: string }) => Promise<{ features: any[] }>;
      maplibregl?: any;
      marker?: boolean;
      // Add other options as needed
    }
  
    class MaplibreGeocoder implements IControl {
      constructor(options: GeocoderOptions);
      onAdd(map: Map): HTMLElement;
      onRemove(map: Map): void;
      on(type: string, listener: (ev: any) => void): this;
    }
  
    export default MaplibreGeocoder;
  }
```

# styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-federal-blue;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-federal-blue;
  }

  a {
    @apply text-forest-green hover:inset-10 transition-colors;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply bg-forest-green text-white hover:bg-opacity-90 focus:ring-forest-green;
  }

  .btn-secondary {
    @apply bg-federal-blue text-white hover:bg-opacity-90 focus:ring-federal-blue;
  }

  .btn-danger {
    @apply bg-imperial-red text-white hover:bg-opacity-90 focus:ring-imperial-red;
  }

  .form-input {
    @apply w-full px-3 py-2 border border-federal-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green;
  }
}

/* Improve focus visibility */
*:focus {
  @apply outline-none ring-2 ring-imperial-red ring-offset-2;
}

/* Custom background classes */
.bg-ecru {
  background-color: theme('colors.ecru');
}

/* Skip to main content link */
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
}
.sr-only.focus\:not-sr-only:focus {
  @apply absolute h-auto p-2 m-2 overflow-visible whitespace-normal bg-federal-blue text-white;
}
```

# stories/page.css

```css
.storybook-page {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;
}

.storybook-page h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  text-decoration: none;
  color: #1ea7fd;
}

.storybook-page ul {
  padding-left: 30px;
  margin: 1em 0;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
}

.storybook-page .tip-wrapper {
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 3px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
}

```

# stories/header.css

```css
.storybook-header {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}

```

# stories/button.css

```css
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}

```

# stories/Page.tsx

```tsx
import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};

```

# stories/Page.stories.tsx

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta = {
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

# stories/Page.stories.ts

```ts
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

```

# stories/Header.tsx

```tsx
import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

```

# stories/Header.stories.ts

```ts
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};

```

# stories/Configure.mdx

```mdx
import { Meta } from "@storybook/blocks";
import Image from "next/image";

import Github from "./assets/github.svg";
import Discord from "./assets/discord.svg";
import Youtube from "./assets/youtube.svg";
import Tutorials from "./assets/tutorials.svg";
import Styling from "./assets/styling.png";
import Context from "./assets/context.png";
import Assets from "./assets/assets.png";
import Docs from "./assets/docs.png";
import Share from "./assets/share.png";
import FigmaPlugin from "./assets/figma-plugin.png";
import Testing from "./assets/testing.png";
import Accessibility from "./assets/accessibility.png";
import Theming from "./assets/theming.png";
import AddonLibrary from "./assets/addon-library.png";

export const RightArrow = () => <svg 
    viewBox="0 0 14 14" 
    width="8px" 
    height="14px" 
    style={{ 
      marginLeft: '4px',
      display: 'inline-block',
      shapeRendering: 'inherit',
      verticalAlign: 'middle',
      fill: 'currentColor',
      'path fill': 'currentColor'
    }}
>
  <path d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" />
</svg>

<Meta title="Configure your project" />

<div className="sb-container">
  <div className='sb-section-title'>
    # Configure your project

    Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.
  </div>
  <div className="sb-section">
    <div className="sb-section-item">
      <Image
        src={Styling}
        alt="A wall of logos representing different styling technologies"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
      <h4 className="sb-section-item-heading">Add styling and CSS</h4>
      <p className="sb-section-item-paragraph">Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.</p>
      <a
        href="https://storybook.js.org/docs/configure/styling-and-css/?renderer=react"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
        src={Context}
        alt="An abstraction representing the composition of data for a component"
      />
      <h4 className="sb-section-item-heading">Provide context and mocking</h4>
      <p className="sb-section-item-paragraph">Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.</p>
      <a
        href="https://storybook.js.org/docs/writing-stories/decorators/?renderer=react#context-for-mocking"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }} 
        src={Assets} 
        alt="A representation of typography and image assets" 
      />
      <div>
        <h4 className="sb-section-item-heading">Load assets and resources</h4>
        <p className="sb-section-item-paragraph">To link static files (like fonts) to your projects and stories, use the
        `staticDirs` configuration option to specify folders to load when
        starting Storybook.</p>
        <a
          href="https://storybook.js.org/docs/configure/images-and-assets/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className="sb-container">
  <div className='sb-section-title'>
    # Do more with Storybook

    Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs.
  </div>

  <div className="sb-section">
    <div className="sb-features-grid">
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Docs} 
          alt="A screenshot showing the autodocs tag being set, pointing a docs page being generated" 
        />
        <h4 className="sb-section-item-heading">Autodocs</h4>
        <p className="sb-section-item-paragraph">Auto-generate living,
          interactive reference documentation from your components and stories.</p>
        <a
          href="https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Share} 
          alt="A browser window showing a Storybook being published to a chromatic.com URL" 
        />
        <h4 className="sb-section-item-heading">Publish to Chromatic</h4>
        <p className="sb-section-item-paragraph">Publish your Storybook to review and collaborate with your entire team.</p>
        <a
          href="https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react#publish-storybook-with-chromatic"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={FigmaPlugin} 
          alt="Windows showing the Storybook plugin in Figma" 
        />
        <h4 className="sb-section-item-heading">Figma Plugin</h4>
        <p className="sb-section-item-paragraph">Embed your stories into Figma to cross-reference the design and live
          implementation in one place.</p>
        <a
          href="https://storybook.js.org/docs/sharing/design-integrations/?renderer=react#embed-storybook-in-figma-with-the-plugin"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Testing} 
          alt="Screenshot of tests passing and failing" 
        />
        <h4 className="sb-section-item-heading">Testing</h4>
        <p className="sb-section-item-paragraph">Use stories to test a component in all its variations, no matter how
          complex.</p>
        <a
          href="https://storybook.js.org/docs/writing-tests/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Accessibility} 
          alt="Screenshot of accessibility tests passing and failing" 
        />
        <h4 className="sb-section-item-heading">Accessibility</h4>
        <p className="sb-section-item-paragraph">Automatically test your components for a11y issues as you develop.</p>
        <a
          href="https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Theming} 
          alt="Screenshot of Storybook in light and dark mode" 
        />
        <h4 className="sb-section-item-heading">Theming</h4>
        <p className="sb-section-item-paragraph">Theme Storybook's UI to personalize it to your project.</p>
        <a
          href="https://storybook.js.org/docs/configure/theming/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className='sb-addon'>
  <div className='sb-addon-text'>
    <h4>Addons</h4>
    <p className="sb-section-item-paragraph">Integrate your tools with Storybook to connect workflows.</p>
    <a
        href="https://storybook.js.org/addons/"
        target="_blank"
      >Discover all addons<RightArrow /></a>
  </div>
  <div className='sb-addon-img'>
    <Image 
      width={650}
      height={347}
      src={AddonLibrary} 
      alt="Integrate your tools with Storybook to connect workflows." 
    />
  </div>
</div>

<div className="sb-section sb-socials">
    <div className="sb-section-item">
      <Image 
        width={32}
        height={32}
        layout="fixed"
        src={Github} 
        alt="Github logo" 
        className="sb-explore-image"
      />
      Join our contributors building the future of UI development.

      <a
        href="https://github.com/storybookjs/storybook"
        target="_blank"
      >Star on GitHub<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={33}
        height={32}
        layout="fixed"
        src={Discord} 
        alt="Discord logo" 
        className="sb-explore-image"
      />
      <div>
        Get support and chat with frontend developers.

        <a
          href="https://discord.gg/storybook"
          target="_blank"
        >Join Discord server<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <Image 
        width={32}
        height={32}
        layout="fixed"
        src={Youtube} 
        alt="Youtube logo" 
        className="sb-explore-image"
      />
      <div>
        Watch tutorials, feature previews and interviews.

        <a
          href="https://www.youtube.com/@chromaticui"
          target="_blank"
        >Watch on YouTube<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <Image 
        width={33}
        height={32}
        layout="fixed"
        src={Tutorials} 
        alt="A book" 
        className="sb-explore-image"
      />
      <p>Follow guided walkthroughs on for key workflows.</p>

      <a
          href="https://storybook.js.org/tutorials/"
          target="_blank"
        >Discover tutorials<RightArrow /></a>
    </div>
</div>

<style>
  {`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `}
</style>

```

# stories/Button.tsx

```tsx
import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

```

# stories/Button.stories.ts

```ts
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

```

# prisma/schema.prisma

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  password      String
  role          String    @default("CLIENT")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  bookings      Booking[]
}

model Booking {
  id              String   @id @default(cuid())
  userId          String
  pickupLocation  String
  dropoffLocation String
  date            DateTime
  time            String
  passengers      Int
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

# prisma/dev.db-journal

This is a binary file of the type: Binary

# prisma/dev.db

This is a binary file of the type: Binary

# pages/index.tsx

```tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Booking Platform - Easy Ride Booking in Düsseldorf</title>
        <meta name="description" content="Book your ride easily in Düsseldorf and surrounding areas with our convenient booking platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Our Booking Platform</h1>
        <p className="mb-4 text-gray-700 text-lg">Easy and convenient ride booking in Düsseldorf and surrounding areas.</p>
        <Link href="/book" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors" role="button" aria-label="Start booking a ride">
          Book a Ride
        </Link>
      </main>
    </div>
  )
}

export default Home
```

# pages/_app.tsx

```tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
```

# lib/prisma.ts

```ts
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient()
  }
  prisma = (global as any).prisma
}

export default prisma
```

# components/Layout.tsx

```tsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-federal-blue focus:text-white">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
```

# components/Header.tsx

```tsx
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Header: React.FC = () => {
  const { data: session } = useSession()

  return (
    <header className="bg-federal-blue text-white p-4" role="banner">
      <nav className="container mx-auto flex justify-between items-center" aria-label="Main navigation">
        <Link href="/" className="text-xl font-bold">
          <span className="sr-only">Booking Platform</span>
          <img src="/logo.png" alt="Booking Platform Logo" className="h-8" />
        </Link>
        <div>
          <Link href="/book/book" className="btn btn-primary bg-slate-700 mr-4">
            Book Now
          </Link>
          {session ? (
            <>
              {session.user.role === 'CLIENT' && (
                <Link href="/client/dashboard" className="btn btn-primary bg-slate-700 mr-4">
                  Client Dashboard
                </Link>
              )}
              {session.user.role === 'DRIVER' && (
                <Link href="/driver/dashboard" className="btn btn-primary bg-slate-700 mr-4">
                  Driver Dashboard
                </Link>
              )}
              <Link href="/user/profile" className="btn btn-primary bg-slate-700 mr-4">
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="btn btn-danger"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/user/login" className="btn btn-primary mr-4 bg-slate-700">
                Login
              </Link>
              <Link href="/user/register" className="btn btn-primary">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
```

# components/Footer.tsx

```tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-federal-blue text-white p-4" role="contentinfo">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Booking Platform. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
```

# .vscode/settings.json

```json
{
    "WillLuke.nextjs.addTypesOnSave": true,
    "WillLuke.nextjs.hasPrompted": true
}
```

# .storybook/preview.ts

```ts
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

```

# .storybook/main.ts

```ts
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;

```

# stories/assets/youtube.svg

This is a file of the type: SVG Image

# stories/assets/tutorials.svg

This is a file of the type: SVG Image

# stories/assets/theming.png

This is a binary file of the type: Image

# stories/assets/testing.png

This is a binary file of the type: Image

# stories/assets/styling.png

This is a binary file of the type: Image

# stories/assets/share.png

This is a binary file of the type: Image

# stories/assets/github.svg

This is a file of the type: SVG Image

# stories/assets/figma-plugin.png

This is a binary file of the type: Image

# stories/assets/docs.png

This is a binary file of the type: Image

# stories/assets/discord.svg

This is a file of the type: SVG Image

# stories/assets/context.png

This is a binary file of the type: Image

# stories/assets/avif-test-image.avif

This is a binary file of the type: Binary

# stories/assets/assets.png

This is a binary file of the type: Image

# stories/assets/addon-library.png

This is a binary file of the type: Image

# stories/assets/accessibility.svg

This is a file of the type: SVG Image

# stories/assets/accessibility.png

This is a binary file of the type: Image

# prisma/migrations/migration_lock.toml

```toml
# Please do not edit this file manually
# It should be added in your version-control system (i.e. Git)
provider = "sqlite"
```

# pages/user/register.tsx

```tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import Link from 'next/link'

type FormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
  role: 'CLIENT' | 'DRIVER'
}

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>()
  const [serverError, setServerError] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Registration failed')
      }

      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message)
      } else {
        setServerError('An unknown error occurred')
      }
    }
  }

  return (
    <>
      <Head>
        <title>Register - Booking Platform</title>
        <meta name="description" content="Create a new account on Booking Platform" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md" noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format'
                }
              })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-bold text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return "Your passwords do not match";
                  }
                },
               })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && <p className="mt-1 text-red-500">{errors.confirmPassword.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block mb-2 font-bold text-gray-700">Role</label>
            <select
              id="role"
              {...register('role', { required: 'Role is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="CLIENT">Client</option>
              <option value="DRIVER">Driver</option>
            </select>
            {errors.role && <p className="mt-1 text-red-500">{errors.role.message}</p>}
          </div>
          {serverError && <p className="mb-4 text-red-500">{serverError}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link href="/user/login" className="text-blue-700 hover:text-blue-600">Log in here</Link>
        </p>
      </main>
    </>
  )
}

export default RegisterPage
```

# pages/user/profile.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import { Card, CardHeader, CardContent, CardTitle } from '../../components/ui/card';

type ProfileFormData = {
  name: string;
  email: string;
  role: string;
};

const ProfilePage: React.FC = () => {
  const { data: session, update: updateSession } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProfileFormData>();
  const [updateError, setUpdateError] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      setValue('name', session.user.name || '');
      setValue('email', session.user.email || '');
      setValue('role', session.user.role || '');
    }
  }, [session, setValue]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      const response = await fetch('/api/user/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      await updateSession({ ...session, user: updatedUser });
      setIsEditing(false);
      setUpdateError(null);
    } catch (error) {
      setUpdateError('Failed to update profile. Please try again.');
    }
  };

  if (!session) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <>
      <Head>
        <title>User Profile - Booking Platform</title>
        <meta name="description" content="View and edit your user profile" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  disabled={!isEditing}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Entered value does not match email format'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  disabled={!isEditing}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  id="role"
                  {...register('role')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  disabled={true}
                />
              </div>
              {updateError && <p className="mb-4 text-sm text-red-600">{updateError}</p>}
              {isEditing ? (
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit Profile
                </button>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfilePage;
```

# pages/user/login.tsx

```tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

type FormData = {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      })

      if (result?.error) {
        setServerError(result.error)
      } else {
        // Redirect based on user role
        const response = await fetch('/api/user/me')
        const userData = await response.json()
        if (userData.role === 'CLIENT') {
          router.push('/client/dashboard')
        } else if (userData.role === 'DRIVER') {
          router.push('/driver/dashboard')
        } else {
          router.push('/')
        }
      }
    } catch (error) {
      setServerError('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>Login - Booking Platform</title>
        <meta name="description" content="Log in to your Booking Platform account" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md" noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format'
                }
              })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
          </div>
          {serverError && <p className="mb-4 text-red-500">{serverError}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Log In
          </button>
        </form>
        <p className="mt-4">
          Dont have an account? <Link href="/user/register" className="text-blue-700 hover:text-blue-600">Register here</Link>
        </p>
      </main>
    </>
  )
}

export default LoginPage
```

# pages/driver/dashboard.tsx

```tsx
import React from 'react';
import { useSession } from 'next-auth/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Calendar, Clock, MapPin, CreditCard, Car } from 'lucide-react';

const mockEarningsData = [
  { date: 'Mon', earnings: 120 },
  { date: 'Tue', earnings: 150 },
  { date: 'Wed', earnings: 180 },
  { date: 'Thu', earnings: 140 },
  { date: 'Fri', earnings: 200 },
  { date: 'Sat', earnings: 250 },
  { date: 'Sun', earnings: 220 },
];

const DriverDashboard: React.FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, Driver {session.user.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Total Rides</CardTitle>
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-gray-500">+5 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Average Ride Duration</CardTitle>
              <Clock className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28 min</div>
            <p className="text-xs text-gray-500">+3 min from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Most Common Route</CardTitle>
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Airport - City Center</div>
            <p className="text-xs text-gray-500">12 rides this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Total Earnings</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€1,260.00</div>
            <p className="text-xs text-gray-500">+€180.50 from last week</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Weekly Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockEarningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earnings" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Airport to City Center
                    </p>
                    <p className="text-sm text-gray-500">
                      August 14, 2024 - 35 minutes
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    €42.50
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Suburban Area to Shopping Mall
                    </p>
                    <p className="text-sm text-gray-500">
                      August 14, 2024 - 25 minutes
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    €28.75
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      City Center to Residential Area
                    </p>
                    <p className="text-sm text-gray-500">
                      August 13, 2024 - 20 minutes
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    €22.00
                  </div>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Fuel Level</span>
                <span className="text-sm font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Next Maintenance</span>
                <span className="text-sm font-semibold">In 2 weeks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <Car className="w-4 h-4 mr-1" />
                  Active
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DriverDashboard;
```

# pages/client/dashboard.tsx

```tsx
import React from 'react';
import { useSession } from 'next-auth/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react';

const mockRideData = [
  { date: '2024-08-01', rides: 3 },
  { date: '2024-08-02', rides: 2 },
  { date: '2024-08-03', rides: 4 },
  { date: '2024-08-04', rides: 1 },
  { date: '2024-08-05', rides: 5 },
  { date: '2024-08-06', rides: 2 },
  { date: '2024-08-07', rides: 3 },
];

const ClientDashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {session.user.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Total Rides</CardTitle>
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-gray-500">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Average Ride Duration</CardTitle>
              <Clock className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23 min</div>
            <p className="text-xs text-gray-500">-2 min from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Most Common Destination</CardTitle>
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Central Station</div>
            <p className="text-xs text-gray-500">8 rides this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Total Spent</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€342.50</div>
            <p className="text-xs text-gray-500">+€50.75 from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ride History</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockRideData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="rides" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Rides</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Airport to Home
                  </p>
                  <p className="text-sm text-gray-500">
                    August 12, 2024 - 45 minutes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  €32.50
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Home to Central Station
                  </p>
                  <p className="text-sm text-gray-500">
                    August 10, 2024 - 20 minutes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  €15.75
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Shopping Mall to Home
                  </p>
                  <p className="text-sm text-gray-500">
                    August 8, 2024 - 30 minutes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  €22.00
                </div>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientDashboard;
```

# pages/book/book.tsx

```tsx
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import BookingPage from '../../components/BookingForm/BookingPage';

const BookRoute: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push('/user/login?callbackUrl=/book/book');
    return null;
  }

  return <BookingPage />;
};

export default BookRoute;
```

# components/ui/card.tsx

```tsx
import React from 'react'

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
)

export const CardHeader = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`px-4 py-5 border-b border-gray-200 ${className}`}>
    {children}
  </div>
)

export const CardContent = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
)

export const CardTitle = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <h3 className={`text-lg leading-6 font-medium text-gray-900 ${className}`}>
    {children}
  </h3>
)
```

# components/BookingForm/MapComponent.tsx

```tsx
import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';

interface Location {
  address: string;
  coordinates: [number, number];
}

interface MapComponentProps {
  pickupLocation: Location | null;
  dropoffLocation: Location | null;
  onLocationSelect: (locationType: 'pickup' | 'dropoff', location: Location) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ pickupLocation, dropoffLocation, onLocationSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [activeMarker, setActiveMarker] = useState<'pickup' | 'dropoff'>('pickup');
  const pickupMarker = useRef<maplibregl.Marker | null>(null);
  const dropoffMarker = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
      center: [6.7735, 51.2277], // Düsseldorf coordinates
      zoom: 12
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    const geocoder = new MaplibreGeocoder({
      forwardGeocode: async (config) => {
        const features = [];
        try {
          const request = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${config.query}&format=geojson&polygon_geojson=1&addressdetails=1`
          );
          const geojson = await request.json();
          for (let feature of geojson.features) {
            const center = [
              feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
              feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2
            ];
            const point = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              place_name: feature.properties.display_name,
              properties: feature.properties,
              text: feature.properties.display_name,
              place_type: ["place"],
              center: center
            };
            features.push(point);
          }
        } catch (e) {
          console.error(`Failed to forwardGeocode with error: ${e}`);
        }

        return {
          features: features
        };
      }
    });
    map.current.addControl(geocoder, 'top-left');

    geocoder.on('result', (e: { result: { center: [number, number]; place_name: string } }) => {
      onLocationSelect(activeMarker, {
        address: e.result.place_name,
        coordinates: e.result.center as [number, number]
      });
      // Toggle the active marker after selection
      setActiveMarker(activeMarker === 'pickup' ? 'dropoff' : 'pickup');
    });

    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then(response => response.json())
        .then(data => {
          onLocationSelect(activeMarker, {
            address: data.display_name,
            coordinates: [lng, lat]
          });
          // Toggle the active marker after selection
          setActiveMarker(activeMarker === 'pickup' ? 'dropoff' : 'pickup');
        });
    });

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (!map.current) return;

    // Update markers when locations change
    if (pickupLocation) {
      if (pickupMarker.current) {
        pickupMarker.current.setLngLat(pickupLocation.coordinates);
      } else {
        pickupMarker.current = new maplibregl.Marker({color: "#4d8b31"})
          .setLngLat(pickupLocation.coordinates)
          .addTo(map.current);
      }
    }

    if (dropoffLocation) {
      if (dropoffMarker.current) {
        dropoffMarker.current.setLngLat(dropoffLocation.coordinates);
      } else {
        dropoffMarker.current = new maplibregl.Marker({color: "#f71735"})
          .setLngLat(dropoffLocation.coordinates)
          .addTo(map.current);
      }
    }

    // Update route when both locations are set
    if (pickupLocation && dropoffLocation) {
      getRoute(map.current, pickupLocation.coordinates, dropoffLocation.coordinates);
      
      // Fit the map to the markers
      const bounds = new maplibregl.LngLatBounds()
        .extend(pickupLocation.coordinates)
        .extend(dropoffLocation.coordinates);

      map.current.fitBounds(bounds, { padding: 100 });
    }
  }, [pickupLocation, dropoffLocation]);

  const getRoute = (map: maplibregl.Map, start: [number, number], end: [number, number]) => {
    const url = `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const route = data.routes[0].geometry;

        if (map.getSource('route')) {
          (map.getSource('route') as maplibregl.GeoJSONSource).setData(route);
        } else {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: route
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#888',
              'line-width': 8
            }
          });
        }
      });
  };

  return (
    <div>
      <div ref={mapContainer} className="w-full h-[500px]" />
      <div className="mt-4 text-center text-federal-blue">
        <p>Click on the map to set {activeMarker === 'pickup' ? 'pickup' : 'dropoff'} location</p>
      </div>
    </div>
  );
};

export default MapComponent;
```

# components/BookingForm/BookingPage.tsx

```tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import BookingForm from './BookingForm';
import MapComponent from './MapComponent';

interface Location {
  address: string;
  coordinates: [number, number];
}

const BookingPage: React.FC = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<Location | null>(null);
  const [activeMarker, setActiveMarker] = useState<'pickup' | 'dropoff'>('pickup');

  const handleLocationSelect = (locationType: 'pickup' | 'dropoff', location: Location) => {
    if (locationType === 'pickup') {
      setPickupLocation(location);
    } else {
      setDropoffLocation(location);
    }
    // Toggle the active marker after selection
    setActiveMarker(locationType === 'pickup' ? 'dropoff' : 'pickup');
  };

  if (!userId) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-federal-blue">Error</h1>
        <p>Unable to retrieve user information. Please try logging in again.</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Book a Ride - Booking Platform</title>
        <meta name="description" content="Book your ride easily in Düsseldorf and surrounding areas" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-federal-blue">Book Your Ride</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <BookingForm 
              userId={userId}
              pickupLocation={pickupLocation}
              dropoffLocation={dropoffLocation}
              onLocationSelect={handleLocationSelect}
              activeMarker={activeMarker}
            />
          </div>
          <div className="w-full md:w-2/3">
            <MapComponent
              pickupLocation={pickupLocation}
              dropoffLocation={dropoffLocation}
              onLocationSelect={handleLocationSelect}
              activeMarker={activeMarker}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingPage;
```

# components/BookingForm/BookingForm.tsx

```tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Location {
  address: string;
  coordinates: [number, number];
}

interface BookingFormProps {
  userId: string;
  pickupLocation: Location | null;
  dropoffLocation: Location | null;
  onLocationSelect: (locationType: 'pickup' | 'dropoff', location: Location) => void;
  activeMarker: 'pickup' | 'dropoff';
}

type BookingFormData = {
  pickupLocation: string;
  dropoffLocation: string;
  date: Date;
  passengers: number;
};

const BookingForm: React.FC<BookingFormProps> = ({ 
  userId, 
  pickupLocation, 
  dropoffLocation, 
  onLocationSelect,
  activeMarker
}) => {
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm<BookingFormData>();

  React.useEffect(() => {
    if (pickupLocation) {
      setValue('pickupLocation', pickupLocation.address);
    }
    if (dropoffLocation) {
      setValue('dropoffLocation', dropoffLocation.address);
    }
  }, [pickupLocation, dropoffLocation, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    // Here you would send the booking data to your API
    console.log('Booking submitted:', { ...data, userId });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="pickupLocation" className="block text-sm font-medium text-federal-blue">
          Pickup Location {activeMarker === 'pickup' && '(Click on map to set)'}
        </label>
        <input
          id="pickupLocation"
          {...register('pickupLocation', { required: 'Pickup location is required' })}
          className="form-input mt-1"
          placeholder="Search or click on map"
          readOnly
        />
        {errors.pickupLocation && <p className="mt-1 text-imperial-red">{errors.pickupLocation.message}</p>}
      </div>

      <div>
        <label htmlFor="dropoffLocation" className="block text-sm font-medium text-federal-blue">
          Dropoff Location {activeMarker === 'dropoff' && '(Click on map to set)'}
        </label>
        <input
          id="dropoffLocation"
          {...register('dropoffLocation', { required: 'Dropoff location is required' })}
          className="form-input mt-1"
          placeholder="Search or click on map"
          readOnly
        />
        {errors.dropoffLocation && <p className="mt-1 text-imperial-red">{errors.dropoffLocation.message}</p>}
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-federal-blue">
          Date
        </label>
        <Controller
          name="date"
          control={control}
          rules={{ required: 'Date is required' }}
          render={({ field }) => (
            <DatePicker
              id="date"
              selected={field.value}
              onChange={(date: Date) => field.onChange(date)}
              className="form-input mt-1"
              placeholderText="Select date"
            />
          )}
        />
        {errors.date && <p className="mt-1 text-imperial-red">{errors.date.message}</p>}
      </div>

      <div>
        <label htmlFor="passengers" className="block text-sm font-medium text-federal-blue">
          Number of Passengers
        </label>
        <input
          id="passengers"
          type="number"
          {...register('passengers', { 
            required: 'Number of passengers is required', 
            min: { value: 1, message: 'Minimum 1 passenger' },
            max: { value: 8, message: 'Maximum 8 passengers' }
          })}
          className="form-input mt-1"
          placeholder="Enter number of passengers"
        />
        {errors.passengers && <p className="mt-1 text-imperial-red">{errors.passengers.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
```

# .github/workflows/nextjs.yml

```yml
# Sample workflow for building and deploying a Next.js site to GitHub Pages
#
# To get started with Next.js see: https://nextjs.org/docs/getting-started
#
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          # Automatically inject basePath in your Next.js configuration file and disable
          # server side image optimization (https://nextjs.org/docs/api-reference/next/image#unoptimized).
          #
          # You may remove this line if you want to manage the configuration yourself.
          static_site_generator: next
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          # Generate a new cache whenever packages or source files change.
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          # If source files changed but packages didn't, rebuild from a prior cache.
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

# prisma/migrations/20240817212408_add_booking_model/migration.sql

```sql
-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "pickupLocation" TEXT NOT NULL,
    "dropoffLocation" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "passengers" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

```

# pages/api/user/update-profile.ts

```ts
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { name, email } = req.body

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name, email },
    })

    res.status(200).json(updatedUser)
  } catch (error) {
    console.error('Profile update error:', error)
    res.status(500).json({ message: 'Failed to update profile' })
  }
}
```

# pages/api/user/me.ts

```ts
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true, name: true, email: true, role: true }
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json(user)
  } catch (error) {
    console.error('Error fetching user data:', error)
    res.status(500).json({ message: 'Internal server error' })
  } finally {
    await prisma.$disconnect()
  }
}
```

# prisma/migrations/20240817133409_no/migration.sql

```sql
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'CLIENT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

```

# pages/api/bookings/bookings.ts

```ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    try {
      const booking = await prisma.booking.create({
        data: {
          pickupLocation: req.body.pickupLocation,
          dropoffLocation: req.body.dropoffLocation,
          date: new Date(req.body.date),
          time: req.body.time,
          passengers: parseInt(req.body.passengers),
          userId: session.user.id,
        },
      });
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

# pages/api/auth/register.ts

```ts
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email }
    })

    if (existingUser) {
      return res.status(422).json({ message: 'User already exists' })
    }

    // Hash the password
    const hashedPassword = await hash(password, 12)

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })

    res.status(201).json({ message: 'User created successfully', user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (error) {
    console.error('Registration error:', error)
    if (error instanceof Error) {
      res.status(500).json({ message: 'Something went wrong', error: error.message })
    } else {
      res.status(500).json({ message: 'An unknown error occurred' })
    }
  } finally {
    await prisma.$disconnect()
  }
}
```

# pages/api/auth/[...nextauth].ts

```ts
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { compare } from "bcryptjs"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) {
            throw new Error("User not found")
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
            throw new Error("Invalid password")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/user/login',
  },
  session: {
    strategy: "jwt"
  },
  // ... other configurations
})
```

