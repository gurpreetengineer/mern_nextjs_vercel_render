# mern_nextjs_vercel_render

# INSTRUCTION AS OF 03 MAY, 2025 - 18:54 ( UAE TIME )
## For md file formatting, here's the link:
[Basic writing and formatting syntax for .md files](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

***GOAL***: Configuration of: Next.js 14 with App Router

1) TypeScript for type safety
2) Tailwind CSS 3 configured with CSS Variables
3) ESLint and Prettier for code quality
4) Husky & Lint-Staged for pre-commit hooks
5) Absolute Imports using @/ prefix
6) Jest for unit testing
7) GitHub Actions for CI/CD
8) Open Graph Helper Function for SEO
9) Sitemap Generation
10) (OPTIONAL) Pre-built Components that adapt with your brand color

## Run commands in the order and edit the respective files:

### ✅ 1. Initialize Next.js 14 App (App Router + TypeScript)
> npx create-next-app@latest frontendaq --typescript --app --tailwind
(turbopack: disabled)
<br>

### ✅ 2. Install Tailwind CSS with CSS Variables Support
Open **tailwind.config.ts** and Add CSS variables for theming:
```
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: 'hsl(var(--color-brand) / <alpha-value>)',
        dark: 'hsl(var(--color-brand-dark) / <alpha-value>)',
        light: 'hsl(var(--color-brand-light) / <alpha-value>)',
      },
    },
  },
},
```

In **globals.css**, set:
```
:root {
  --color-brand: 220 90% 56%;
  --color-brand-dark: 220 90% 40%;
  --color-brand-light: 220 90% 70%;
}
```
<br>

### ✅ 3. Set Up ESLint + Prettier + Linting Rules
> npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier

Create **.eslintrc.js**:
```
module.exports = {
  root: true,
  extends: ['next', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
}
```

Create **.prettierrc**:
```
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```
<br>

### ✅ 4. Setup Husky + Lint-Staged (! make sure you are in a git repo and .git file exists.)
> npx husky-init && npm install
> npm install -D lint-staged

Edit **package.json**:
```
"lint-staged": {
  "*.{js,jsx,ts,tsx}": "eslint --fix"
}
```

In **.husky/pre-commit**, replace with:
```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```
<br>

### ✅ 5. Enable Absolute Imports using @/ Prefix
In **tsconfig.json**, under _compilerOptions_:
```
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}
```
<br>

### ✅ 6. Jest Setup for Unit Testing
> npm install -D jest @types/jest ts-jest babel-jest @testing-library/react @testing-library/jest-dom

Create **jest.config.ts**:
```
export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

Create **jest.setup.ts**:
```
import '@testing-library/jest-dom'
```

Add script in **package.json**:
```
"scripts": {
  "test": "jest"
}
```
<br>

### ✅ 7. Add GitHub Actions for CI/CD
In folder ***.github/workflows***
create file **/ci.yml**:
```
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install deps
        run: npm install
      - name: Lint
        run: npm run lint
      - name: Test
        run: npm run test
      - name: Build
        run: npm run build
```
<br>

### ✅ 8. Add Open Graph SEO Helper

Create **src/lib/seo.ts**:
```
type OGOptions = {
  title: string
  description: string
  image?: string
}

export const generateOGMeta = ({ title, description, image }: OGOptions) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image ?? '/default-og.png',
        },
      ],
    },
  }
}
```
<br>

### ✅ 9. Sitemap Generation
> npm install next-sitemap

Create **next-sitemap.config.js**:
```
module.exports = {
  siteUrl: 'https://your_domain.com', // replace with your domain
  generateRobotsTxt: true,
}
```
Update **package.json**:
```
"scripts": {
  "sitemap": "next-sitemap"
}
```
> npm run sitemap
<br>

### ✅ 10. Pre-built Brand Components (Optional)
```
<button className="bg-brand hover:bg-brand-dark text-white font-bold py-2 px-4 rounded">
  CLICK ME
</button>
```
<br>

## ✅ Final Folder Structure (Suggested)

```
astroquest/
├── public/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   └── tests/
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── jest.config.ts
├── jest.setup.ts
├── next-env.d.ts
├── next-sitemap.config.js
├── next.config.ts
├── package.json
├── postcss.config.js
├── tsconfig.json
├── tailwind.config.js
└── package.json
```
<br>

### I hope it helps your initial structure of next js project.
