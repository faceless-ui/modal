# Modal

A component that instantiates a modal. Does everything that [asModal](../asModal/README.md) does, but inline with optional [render props](https://reactjs.org/docs/render-props.html).

## Usage

```jsx
  import React from 'react';
  import { Modal } from '@trbl/react-modal';

  export default SomeComponent = () => (
    <Modal slug="modal1">
      ...
    </Modal>
  );
```

Can also accept a function as a child. Returns [isOpen](../asModal/README.md#isOpen) and the [modal context](../ModalProvider/README.md#provided-context). Useful when wrapping a dedicated a component with [asModal](../asModal/README.md) is overkill.

```jsx
  import React from 'react';
  import { Modal } from '@trbl/react-modal';

  export default SomeComponent = () => (
    <Modal slug="modal1">
      {(modal, isOpen) => {
        const { currentModal } = modal;
        return <p>{currentModal}</p>;
      }}
    </Modal>
  );
```
