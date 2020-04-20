# useModal

A hook that provides the [modal context](../ModalProvider/README.md#provided-context) to your functional component. To consume the modal context in a class-based component, use the [withModal](../withModal/README.md) higher-order component.

## Usage

Fire the hook and assign it to a variable.

```jsx
  import React from 'react';
  import { useModal } from '@trbl/react-modal';

  export default SomeComponent = () => {
    const modal = useModal();
    return <p>{modal.currentModal}</p>;
  };
```
