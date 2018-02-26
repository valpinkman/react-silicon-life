# React Silicon Life

React Silicon Life is a React boilerplate tailored for static rendering.
This project does **not** use Server Side Rendering (no we do not always need SSR, yes trust me, I'm an engineer)

## Features

React Silicon Life comes preconfigured with some pretty 😎 features:
  - [Redux](https://github.com/reactjs/redux), you know, state management
  - [React Router 4](https://github.com/ReactTraining/react-router), because we need routing
  - [Styled JXS](https://github.com/zeit/styled-jsx) for CSS styling
  - [Eslint](https://eslint.org/) to make sure we follow the same coding style
  - [Prettier](https://prettier.io/) so be **really** sure we follow the same coding style
  - [Flow](https://flow.org) to make you believe Javascript is a typed language
  - [Jest](https://facebook.github.io/jest) for tests, also because it's good now (not kidding)
  - [Babel](https://babeljs.io) with ES20xx features (think _async/await_ and stuff)
  - [Webpack](https://webpack.js.org/), because **bundling** and **hot reloading**, setup with webpack dev server
  
## How To Use
### 🛠 Prerequisite

You will need `node >= 8` and `npm >= 3`, or `yarn` if you like yarn

### 🔧 Install
Clone or fork the project and install dependencies
```bash
$ git clone git@github.com:valpinkman/react-silicon-life.git
$ cd react-silicon-life
$ npm i 
# or if you use yarn
$ yarn
```

### 🎉 Start the project and get coding

NPM start script will spawn a webpack-dev-server to https://localhost:9000

```bash
$ npm start
```

Then you can start editing the App however you see fit. If you don't like the folder architecture, please feel free to change it at your _gusto_.

### ✅ Testing

Testing is done using Jest. Start the tests by running `npm test`. Jest will generate _snapshots_ that will be used when you run test again, and alert you if anything has changed. If you need to update your snapshots, simply run the command `npm run test-update`

### 👾 Extra VSCode Setup

If you need help configuring all the tools talked about here (flow, eslint, prettier...) with VS Code, here is a really helpful article on Hackernoon: [Configure ESLint, Prettier, and Flow in VS Code for React Development](https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213)

Also here is my VS Code workspace setting if that can help: [gist](https://gist.github.com/valpinkman/84f48cb00a1c36d543747efc56111e4d)

## 👻 Why Silicon Life you say ?

Well, all projects need a name, and with all the react boilerplate out there (actually, not just react), I needed a name as well. While I was setting up this starter, I was re-reading the amazing Manga by _Tsutomo Nihei_, **Blame!**, and the Silicon Life are pretty f*cking badass. I'll just recommend this piece of art, and all the other stories written by Tsutomo Nihei, to every one.  

So now you know, if you haven't read it yet, you should

Oh, and here, a picture of PCell, a Silicon Life (in case you didn't figure it out yet 🙃)
![Pcell - Blame!](files/pcell.jpg)