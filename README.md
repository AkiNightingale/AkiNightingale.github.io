# Demo SPA

The project is written as a demonstration of layout capabilities, with minimal active functionality using React.

## Deployed on GitHub Pages

Follow the link to view it:\
[https://akinightingale.github.io/test-layout/](https://akinightingale.github.io/test-layout/)

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

### This project includes:

- React 18.3.1
- TypeScript 4.9.5
- Sass 1.77.8
- Node 16.20.2
- Npm 8.19.4

---

## Project Description

### Key Features on the Page:

- Animated gradient buttons in the Header
- A side menu appears on mobile devices, which can be opened
- Animated interaction with the "Read more" button at the bottom of the page
- The banner at the top of the page is created using [Multiple Backgrounds](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) and has responsive behaviour

### Key Points in the Code:

- The entire project is organised into folders according to the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) architectural approach


- The project contains 2 main folders: `app` - the main page and its components, `assets` - which stores images,
  colours, breakpoints and `ui-kit`, and includes the implementation of reusable components with styles


- `assets -> styles` stores breakpoints for better responsiveness


- `assets -> images -> original-svg` contains the original images from Figma, which have been further optimised using
  [clsx](https://www.npmjs.com/package/clsx)