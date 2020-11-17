[![NPM](https://img.shields.io/npm/v/@faceless-ui/modal)](https://www.npmjs.com/@faceless-ui/modal)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@faceless-ui/modal?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Modal

An unstyled, transition-ready, a11y-enabled library for creating dialogs, drawers, confirmations, popups, popovers, mega-menus, light-boxes, etc, etc, etc. Meant to power UI libraries. You decide what it does, how it works, how it looks...and ultimately what its called. Build literally any modal experience.

# Table of Contents
  - [Installation](#installation)
  - [Basic Setup](#basic-setup)
  - [API](#api)
  - [Highlights](#highlights)
  - [Demo](#demo)
  - [Showcase](#showcase)
  - [Contribution](#contribution)

## Quick Start

### Installation

```bash
$ npm i @faceless-ui/modal
$ # or
$ yarn add @faceless-ui/modal
```

### Basic Setup

```jsx
import React from 'react';
import {
  Modal,
  ModalContainer,
  ModalProvider,
  ModalToggler
} from '@faceless-ui/modal';

const App = () => (
  <ModalProvider>
    <Modal slug="modal1">
      ...
    </Modal>
    <ModalToggler slug="modal1">
      ...
    </ModalToggler>
    <ModalContainer />
  <ModalProvider>
);

export default App;
```

Explanation:

- [ModalProvider](./src/ModalProvider/README.md) provides context. Render it one-time, at the top-level of your app or nearest common ancestor.

- [ModalContainer](./src/ModalContainer/README.md) is where every modal will portal into. Render it one time, anywhere in your app (as a descendant of the provider).

- [Modal](./src/Modal/README.md) will new up a modal, it only needs a unique slug.

  - Render as-is, or with render props:

    ```jsx
    export default CustomModalB = () => (
      <Modal slug="customModalB">
        {(modal) => {
          const { closeAll } = modal;

          return (
            <div>
            ...
              <button onClick={() => closeAll()}>
                Close
              </button>
            </div>
          )
        )}
      </Modal>
    )
    ```

  - Or instantiate a modal with the [asModal](./src/asModal/README.md) HOC:

    ```jsx
    export default CustomModalA = asModal((props) => {
      const { closeAll } = props;

      return (
        <div>
          ...
          <button onClick={() => closeAll()}>
            Close
          </button>
        <div>
      )
    }, 'customModalA'); // or render with a 'slug' prop
    ```


- [ModalToggler](./src/Modal/README.md) is a quick way to control a modal.

  - You can also toggle a modal directly with the [useModal](./src/useModal/README.md) hook:

    ```jsx
    export default CustomModalTogglerA = () => {
      const { toggle } = useModal();

      return (
        <button onClick={() => toggle('customModalA')}> // or use 'open()'
          Open
        <button>
      )
    };
    ```

  - Or the [withModal](./src/withModal/README.md) HOC:

    ```jsx
    export default CustomModalTogglerB = withModal(props) => {
      const { modal: { toggle } } = props;

      return (
        <button onClick={() => toggle('customModalB')}> // or use 'open()'
          Open
        <button>
      )
    };
    ```

## API

  - [asModal](./src/asModal/README.md)
  - [Modal](./src/Modal/README.md)
  - [ModalContainer](./src/ModalContainer/README.md)
  - [ModalProvider](./src/ModalProvider/README.md)
  - [ModalToggler](./src/ModalToggler/README.md)
  - [useModal](./src/useModal/README.md)
  - [withModal](./src/withModal/README.md)

For working examples, see the [demo app](./demo/App.demo.js).

## Highlights

- #### Composable
  Accommodates any setup. Render [ModalProvider](./src/ModalProvider/README.md) at the top-level, and [ModalContainer](./src/ModalProvider/README.md) anywhere within that. Then create modals and interact with them however your project demands.

- #### Faceless UI
  Applies no visual style of it's own. CSS transition-ready using [react-transition-group](https://reactcommunity.org/react-transition-group/). Target any element and any UI state using transition hooks.

- #### Accessible
  Shipped fully accessible. [ModalProvider](./src/ModalProvider/README.md#accessibility), [asModal](./src/asModal/README.md#accessibility), and [ModalToggler](./src/ModalToggler/README.md#accessibility) strictly follow the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines on [modal dialogs](https://www.w3.org/TR/wai-aria-practices/#dialog_modal). You can also [customize anything](#agnostic-dom).

- #### Agnostic DOM
  Leaves minimal DOM footprint and provides full control. Things like custom markup, accessibility, or additional event handling. Everything beyond core functionality is extendable.

- #### Router Ready
  Control and be controlled by the URL with any modal. Opt-in to use the native [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). Using [Next.js](https://nextjs.org/), [Gatsby](https://www.gatsbyjs.org/), or some other framework? Easily [use those routers](./src/ModalProvider/README.md#routing) too.

## Demo

```bash
$ git clone git@github.com:faceless-ui/modal.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Showcase

This package is being actively used in the following projects. To have your project added to this list, please create an [issue](https://github.com/faceless-ui/modal/issues) or make a [pull request](https://github.com/faceless-ui/modal/pulls).

-  [My290](https://my.290signs.com)
-  [Custer Inc](https://custerinc.com/)
-  [Payload CMS](https://payloadcms.com/)

## Contribution

[Help us,](https://github.com/faceless-ui/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/faceless-ui/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/faceless-ui/modal/blob/master/LICENSE) Copyright (c) TRBL, LLC
