# asModal

This higher-order component is what enables your component for use as a modal. It is responsible for portaling your component through to the [Modal Container](../ModalContainer/README.md), and attaching an `isOpen` prop for your consumption.

## Usage

Render the HOC inline:

```jsx
  import React from 'react';
  import { asModal } from '@trbl/react-modal';

  const Modal1 = asModal(() => (
    <div>Modal 1</div>
  ), 'modal1');

  export default Modal1;
```

Or wrap the HOC on export:

```jsx
  import React from 'react';
  import { asModal } from '@trbl/react-modal';

  const Modal1 = () => (
    <div>Modal 1</div>
  );

  export default asModal(Modal1, 'modal1');
```

Or for dynamically rendered modals, you can set the slug as a prop instead of an argument:

```jsx
  import React from 'react';
  import { asModal } from '@trbl/react-modal';

  const Modal1 = asModal(() => (
    <div>Modal 1</div>
  ));

  const SomeOtherComponent = () => (
    <Modal1 slug="modal1" />
  );

  export default SomeOtherComponent;
```

## Classes

```scss
  .modal-item {
    ...
    &--slug-modal1 {
      ...
      &--appear { ... }
      &--appearActive { ... }
      &--appearDone { ... }
      &--enter { ... }
      &--enterActive { ... }
      &--enterDone { ... }
      &--exit { ... }
      &--exitActive { ... }
      &--exitDone { ... }
    }
  }
```

## Args

- #### `ModalComponent`
  Type: Node
  Required

- #### `Slug`
  Type: String
  Optional
  Notes: Use if the slug prop is absent.

## Props

- #### `slug`
  Type: String
  Optional
  Notes: Use if the slug argument is absent.

## Inherited Props

- #### `isOpen`
  Type: Boolean
