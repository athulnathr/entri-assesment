# react-starter-boilerplate-hmr

> React Starter Boilerplate with React Fast Refresh and Webpack 5

## Tutorial

**The tutorial on my blog site is the most up-to-date with this template.** Visit my [blog entry](https://esausilva.com/2018/01/13/learn-webpack-for-react/) where I go step-by-step on how to build this boilerplate from scratch.

## Features

- React 17
- React Fast Refresh
- React Router 5
- Webpack 5
- Semantic UI as the CSS Framework
- CSS Autoprefixer
- CSS Modules with SourceMap
- @babel/plugin-proposal-class-properties
- @babel/plugin-syntax-dynamic-import
- Code splitting by Route and Vendor
- [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer)
- Take a look at [package.json](https://github.com/esausilva/react-starter-boilerplate-hmr/blob/master/package.json)

### Usage

Install dependencies

```
$ yarn
```

Run development server

```
$ yarn dev
```

### Building

```
$ yarn build
```

Will create a `dist` directory containing your compiled code.

Depending on your needs, you might want to do more optimization to the production build.

## Webpack Bundle Analyzer

Run in development

```
$ yarn dev:bundleanalyzer
```

Run on the production oprimized build

```
$ yarn build:bundleanalyzer
```