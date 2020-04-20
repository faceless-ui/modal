# Modal

A component that instantiates a modal. Accepts a function as its child. Useful when dedicating a component solely for use as a modal is overkill. Does everything that [asModal](../asModal/README.md) does, but with [render props](https://reactjs.org/docs/render-props.html) instead.

## Usage

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
