[![NPM](https://img.shields.io/npm/v/@trbl/react-modal)](https://www.npmjs.com/@trbl/react-modal)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-modal?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Modal

America's next top modal.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-modal
```

### Composition

```jsx
  import React from 'react';
  import { asModal, ModalContainer, ModalProvider, ModalToggler } from '@trbl/react-modal';

  const AsModal = asModal(() => return <div>My Modal</div>, 'demo-modal');

  const App = () => {
    return (
      <ModalProvider>
        <ModalToggler slug="demo-modal">
          ...
        </ModalToggler>
        <AsModal />
        <ModalContainer />
      <ModalProvider>
    )
  }

  export default App;
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [asModal](./src/asModal/README.md)
  - [ModalContainer](./src/ModalContainer/README.md)
  - [ModalProvider](./src/ModalProvider/README.md)
  - [ModalModalToggler](./src/ModalToggler/README.md)
  - [useModal](./src/useModal/README.md)
  - [withModal](./src/withModal/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-modal/blob/master/LICENSE) Copyright (c) TRBL, LLC
