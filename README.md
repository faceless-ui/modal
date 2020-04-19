[![NPM](https://img.shields.io/npm/v/@trbl/react-modal)](https://www.npmjs.com/@trbl/react-modal)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-modal?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Modal

America's next top modal.

## Highlights

- #### Modularization
  Tie into the modal context in both functional and class-based components with the [useModal](./src/useModal/README.md) hook or the [withModal](./src/useModal/README.md) higher-order component. Scaffold a modal with the [asModal](./src/asModal/README.md) higher-order component, or new up a modal with the [Modal](./src/Modal.README.md) component to immediately consume the modal context from its render props. Quickly open and close a modal the [ModalToggler](./src/ModalToggler/README.md) component, or wire in your own directly. _Let the composition of your app determine your modal setup, not the other way around_.

- #### Routing
  The [Modal Provider](./src/ModalProvider/README.md) will push and manage a URL parameter, useful if you want to share the content of a modal through a direct link, or navigate using the forward and back button of your browser. If your app is already using a router, you can handle the parameter change yourself through an exposed callback function.

- #### Portaling
  Instances of modals are portaled into the [Modal Container](./src/ModalContainer/README.md), which can be rendered anywhere as a descendent of the [Modal Provider](./src/ModalProvider/README.md). This way you write modals contextually, preventing you from having to lift state or drill props, or resort to some global state manager, i.e. [Redux](https://redux.js.org/). Portaling each modal into a centralized, global container also helps in dealing with CSS stacking contexts.

- #### Accessibility
  This package aims to comply with the general accessibility requirements of the modern web by following the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines. Open modals will prevent irrelevant elements from receiving focus unexpectedly, they will append the `aria-hidden` attribute to the html body, and are able to be closed using the escape key.Additional ARIA attributes can be given to any component (see [Agnostic DOM](#agnostic-dom)).

- #### Pre-configured CSS Classes
  [BEM](http://getbem.com/) classes have been provided for you, meaning you can use CSS to target any element or state without additional legwork. To mitigate conflicting class names, a class prefix can be attached by setting a prop on the [Modal Provider](./src/ModalProvider/README.md). Transition classes also come pre-configured using [React Transition Group](https://reactcommunity.org/react-transition-group/). This makes it easy to accommodate fancy modal experiences. Transition classes can be customized with a prop on the [Modal Provider](./src/ModalProvider/README.md).

- #### Agnostic DOM
  These components make as few assumptions about your setup as possible to give you complete control over the DOM. Things like custom markup, accessability, and event handling are all possible by piping them through [React HTML Element](https://www.npmjs.com/package/@trbl/react-html-element).

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
    asModal,
    ModalContainer,
    ModalProvider,
    ModalToggler
  } from '@trbl/react-modal';

  const Modal1 = asModal(() => return <div>Modal1</div>);

  const App = () => (
    <ModalProvider>
      <Modal1 slug="modal1" />
      <ModalToggler slug="modal1">
        ...
      </ModalToggler>
      <ModalContainer />
    <ModalProvider>
  )

  export default App;
```

For more complex examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:trouble/react-modal.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

  - [asModal](./src/asModal/README.md)
  - [Modal](./src/Modal.README.md)
  - [ModalContainer](./src/ModalContainer/README.md)
  - [ModalProvider](./src/ModalProvider/README.md)
  - [ModalToggler](./src/ModalToggler/README.md)
  - [useModal](./src/useModal/README.md)
  - [withModal](./src/withModal/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-modal/blob/master/LICENSE) Copyright (c) TRBL, LLC
