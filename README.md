# React Modal

## Source Code

### Abstract

This project leverages React's Context API as well as the browser's native history state in a way that allows for an elegantly abstracted, highly performant modal experience for the both end-user as well as the developer.

### Component Composition

```javascript
  const MyModal = asModal(() => return <div>My Modal</div>);

  <ModalProvider>
    <ModalToggler />
    <MyModal />
    <ModalContainer />
  <ModalProvider>
```

### Component Documentation

The source components in their raw form are found in the `src` directory. These are all batch exported from the top-level `index.js` so that they can be easily accessed via import.

[asModal](/src/asModal/README.md)
[ModalContainer](/src/ModalContainer/README.md)
[ModalProvider](/src/ModalProvider/README.md)
[ModalModalToggler](/src/ModalToggler/README.md)
[withModalContext](/src/withModalContext/README.md)

## Environment

### Distribution

The entrypoint for the production bundle is `/dist/build.bundle.js`, as defined in `package.json`. Importing this project will return that bundle.

### Compilation and Transpilation

Generating this production bundle is defined in `webpack.production.config.js`, one of two custom webpack configurations defined at the top of this repo. It simply processes all of the `.js` files within the `src` directory through the `babel-loader` transpiler and into the `dist` directory.

  - tldr: `npm run build`.

### Development

The other webpack configuration is `webpack.development.config.js` which does a few things differently -- compilation happens from the `demo` directory as opposed to the `src` directory. It then will spin up `webpack-dev-server`, which serves a compiled and transpiled build _in memory_, with hot-reloading enabled.

  - tldr: `npm run dev`.
