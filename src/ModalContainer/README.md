# Modal Container

This is the DOM node that all modals will portal into. Render a single instance anywhere within your app, so long as its a descendent of the [Modal Provider](../ModalProvider/README.md) tree.

## Usage

```jsx
  import React from 'react';
  import { ModalToggler } from '@trbl/react-modal';

  const MyComponent = () => <ModalContainer />
```

If needed, this component is easily augmented with additional behavior, making easy work for things like custom markup, accessability, or additional click action. It is being piped through [@trbl/react-html-element](https://www.npmjs.com/package/@trbl/react-html-element) to give you complete control over the DOM.

```jsx
  import React, { useState } from 'react';
  import { ModalContainer } from '@trbl/react-modal';

  const MyComponent = () => (
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
  )
```

## Classes

```scss
  .trbl__modal-container {
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
  Type: String
  Optional

- #### `className`
  Type: String
  Optional

- #### `style`
  Type: Boolean
  Optional

- #### `htmlElement`
  Type: String
  Optional
  Default: button

- #### `htmlAttributes`
  Type: Object
  Optional
