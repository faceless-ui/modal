# React Modal

### Compilation and Transpilation

The components are all batch exported in `src`, which gets compiled through Webpack and transpiled Babel, into `dist/build.js` which is the entry point of this node_module as defined in `package.json`. Running `npm run build` will perform this action, firing Webpack's production process as defined in `webpack.config.js`.

Alternatively, `npm run dev` will fire Webpack's development process as defined in `webpack.config.js` -- which simply bundles the code in the same way, but with a different output filename which hot-reloads. It will then spin up a new local server, bootstrapping at `./demo/index.js`.