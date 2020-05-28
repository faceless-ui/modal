[![NPM](https://img.shields.io/npm/v/@trbl/react-modal)](https://www.npmjs.com/@trbl/react-modal)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-modal?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Modal

A flexible, unstyled, a11y-enabled library for creating dialogs, drawers, popups, popovers, mega-menus, light-boxes, etc, etc, etc. Modals with fancy names. Meant to power other UI libraries. You decide what it does, how it works, how it looks...and ultimately what its called.

## Highlights

- #### Modular
  Get creative with your setup. Create a modal from anywhere with [Modal](./src/Modal.README.md) or [asModal](./src/asModal/README.md). Interact with a modal from anywhere with [useModal](./src/useModal/README.md) or [withModal](./src/useModal/README.md). Quickly control them with [ModalToggler](./src/ModalToggler/README.md) or easily create your own.

- #### Faceless UI
  Applies no visual style, but encourages you to do so. Target any element and any state without additional legwork. [BEM](http://getbem.com/) classes come shipped. Transition classes too, using [react-transition-group](https://reactcommunity.org/react-transition-group/). Build literally any modal experience, and start challenging your designers for a change.

- #### Agnostic DOM
  Take complete control over the DOM. Things like custom markup, accessibility, or additional event handling. Everything beyond core functionality is [extendable](https://www.npmjs.com/package/@faceless-ui/html-element). No more needing to nest or wrap nodes unnecessarily.

- #### Router Ready
  Control any modal with the URL. Share direct links, open on load, or use browser navigation. Opt-in to use the [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). Using [Next.js](https://nextjs.org/), [Gatsby](https://www.gatsbyjs.org/), or some other framework? Easily [use those routers](./src/ModalProvider/README.md#routing) instead.

- #### Contextual
  Leave your content put. Stop lifting state and drilling props, or throwing into [Redux](https://redux.js.org/). Render [ModalContainer](./src/ModalContainer/README.md) anywhere in your app as a descendent of the [ModalProvider](./src/ModalProvider/README.md). Each modal will ultimately render here, no matter where they're written. Also helpful in dealing with CSS stacking contexts.

- #### Accessible
  Shipped fully accessible. [ModalProvider](./src/ModalProvider/README.md#accessibility), [asModal](./src/asModal/README.md#accessibility), and [ModalToggler](./src/ModalToggler/README.md#accessibility) strictly follow the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines on [modal dialogs](https://www.w3.org/TR/wai-aria-practices/#dialog_modal). You can also [customize anything](#agnostic-dom).

## Quick Start

### Installation

```bash
$ npm i @trbl/react-modal
$ # or
$ yarn add @trbl/react-modal
```

### Composition

```jsx
  import React from 'react';
  import {
    Modal,
    ModalContainer,
    ModalProvider,
    ModalToggler
  } from '@trbl/react-modal';

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

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:trouble/react-modal.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [asModal](./src/asModal/README.md)
  - [Modal](./src/Modal/README.md)
  - [ModalContainer](./src/ModalContainer/README.md)
  - [ModalProvider](./src/ModalProvider/README.md)
  - [ModalToggler](./src/ModalToggler/README.md)
  - [useModal](./src/useModal/README.md)
  - [withModal](./src/withModal/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-modal/blob/master/LICENSE) Copyright (c) TRBL, LLC
