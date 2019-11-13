[![NPM](https://img.shields.io/npm/v/@trbl/react-modal)](https://www.npmjs.com/@trbl/react-modal)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-modal?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Modal

An elegantly abstracted, highly performant modal experience for both the developer and end-user.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-modal
```

### Compositon

```jsx
  const MyModal = asModal(() => return <div>My Modal</div>, 'demo-modal');

  <ModalProvider
    classPrefix="demo"
    transTime={2000}
    zindex={999}
  >
    <ModalToggler slug="demo-modal">
      ...
    </ModalToggler>
    <MyModal />
    <ModalContainer />
  <ModalProvider>
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn install
$ npm run dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [asModal](/src/asModal/README.md)
  - [ModalContainer](/src/ModalContainer/README.md)
  - [ModalProvider](/src/ModalProvider/README.md)
  - [ModalModalToggler](/src/ModalToggler/README.md)
  - [withModalContext](/src/withModalContext/README.md)

## License

[MIT](https://github.com/trouble/react-modal/blob/master/LICENSE) Copyright (c) TRBL, LLC
