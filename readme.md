# React Silicon Life

![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=valpinkman/react-silicon-life)](https://dependabot.com)

React Silicon Life is a React boilerplate tailored for static rendering.
This project does **not** use Server Side Rendering (no we do not always need SSR, yes trust me, I'm an engineer)

## Features

React Silicon Life comes preconfigured with some pretty 😎 features:
  - [Typescript](https://www.typescriptlang.org/index.html) to make you believe javascript is a typed language
  - [ESLint](https://eslint.org/) because tslint is dead and we wanna lint typescript
  - [Prettier](https://prettier.io/) to be sure we follow the same coding style
  - [Jest](https://facebook.github.io/jest) for tests, also because it's good now (not kidding)
  - [parcel](https://parceljs.org/), because **bundling** and **dev server**, out with the old webpack
  
## How To Use
### 🛠 Prerequisite

You will need `node >= 8` and `npm >= 3`, or `yarn` if you like yarn, use yarn

### 🔧 Install
Clone or fork the project and install dependencies
```bash
$ git clone git@github.com:valpinkman/react-silicon-life.git
$ cd react-silicon-life
$ yarn
# or if you use `still` use npm
$ npm i 
```

### 🎉 Start the project and get coding

NPM dev script will spawn a dev server listening to https://localhost:1234

```bash
$ yarn start
```

Then you can start editing the App however you see fit. If you don't like the folder architecture, please feel free to change it at your _gusto_.

### ✅ Testing

Testing is done using Jest. Start the tests by running `yarn test`. Jest will generate _snapshots_ that will be used when you run test again, and alert you if anything has changed. If you need to update your snapshots, simply run the command `npm run test-update`

### 👾 Extra VSCode Setup

If you need help configuring all the tools talked about here (typscript, tslint, prettier...) with VS Code, you can check my VSCode workspace settings on this [gist](https://gist.github.com/3dc7787503fa4da7887c4b6389f8dbff)

## 👻 Why Silicon Life you say ?

Well, all projects need a name, and with all the react boilerplate out there (actually, not just react), I needed a name as well. While I was setting up this starter, I was re-reading the amazing Manga by _Tsutomo Nihei_, **Blame!**, and the Silicon Life are pretty f*cking badass. I'll just recommend this piece of art, and all the other stories written by Tsutomo Nihei, to every one.  

So now you know, if you haven't read it yet, you should

Oh, and here, a picture of PCell, a Silicon Life (in case you didn't figure it out yet 🙃)
![Pcell - Blame!](files/pcell.jpg)
