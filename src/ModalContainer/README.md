# Modal Container

This is the DOM node that all modals will portal into. Global and shared transitions and background overlays can be scoped here, or [styled directly](../asModal/README.md#classes) onto each modal individually.

## Usage

Render a single instance anywhere within your app, so long as its a descendent of [ModalProvider](../ModalProvider/README.md).

```jsx
  import React from 'react';
  import { ModalToggler } from '@trbl/react-modal';

  const App = () => (
    ...
    <ModalContainer />
    ...
  )
```

Customize the markup, enhance accessibility, anything you want.

```jsx
  import React, { useState } from 'react';
  import { ModalContainer } from '@trbl/react-modal';

  const App = () => (
    ...
    <ModalContainer
      id="some-id"
      className="some-additional-class"
      htmlElement="span"
      htmlAttributes={{
        aria-label: 'This is the modal container.',
        title: 'This is the modal container.'
      }}
    >
      ...
    </ModalToggler>
    ...
  )
```

## Classes

```scss
  .modal-container {
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
```

## Props

- #### `id`
  Type: `String`\
  Optional

- #### `className`
  Type: `String`\
  Optional

- #### `style`
  Type: `Boolean`\
  Optional

- #### `htmlElement`
  Type: `String`\
  Optional\
  Default: div

- #### `htmlAttributes`
  Type: `Object`\
  Optional
