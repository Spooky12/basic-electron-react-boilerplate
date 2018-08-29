# basic-electron-react-boilerplate

A basic boilerplate for cross-platform desktop apps greatly inspired by [this article](https://medium.freecodecamp.org/heres-how-i-created-a-markdown-app-with-electron-and-react-1e902f8601ca). This boilerplate uses npm unlike the article that uses yarn.

## Installation

- Clone the repo via git:

```bash
git clone --depth=1 https://github.com/Spooky12/basic-electron-react-boilerplate.git your-project-name
```

- Install the dependencies:

```bash
cd your-project-name
npm install
```

## Running the App

- To start the app in a `dev` environment:

```bash
npm run electron-dev
```

## Packaging the App

- To build the React app:

```bash
npm run preelectron-pack
```

- To package the React app:

```bash
npm run electron-pack
```

The packaged application will be in the `dist` directory.

Note: I only tested on Windows, so you might need to check the documentation of [electron-builder](https://www.electron.build/) and edit the `build` part of `package.json` is you want to build for other platforms.

- To only get the unpacked version of the App, you can run:

```bash
npm run electron-dist
```

## Including files in the packaged app

If you want to include files in the packaged application, you have to put them in the `extraResources` directory. Once packaged, the files can be found in the `resources/extraResources` directory of the packaged application (`Contents/Resources/extraResources` [for MacOS](https://www.electron.build/configuration/contents#extraresources)).

To access this folder in your app you can do:

```javascript
const isDev = window.require('electron-is-dev')
const pathAppResources = `${isDev ? '.' : window.process.resourcesPath}/extraResources/`
```