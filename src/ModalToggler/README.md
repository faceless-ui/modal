# Modal Toggler

This component is a plug-and-play solution for toggling modal windows. Opening and closing modals is easy, so you don't necessarily need this component in order to do that, but it does provide a common pattern for the majority of use cases. If you need control beyond what this component provides, you should interact with the `ModalContext` yourself.

## Usage

Give it a valid slug to an existing modal, along with some children, and voila.

```jsx
  import React from 'react';
  import { ModalToggler } from '@trbl/react-modal';

  const MyComponent = () => (
    <ModalToggler slug="modal1">
      ...
    </ModalToggler>
  )
```

If needed, this component is easily augmented with additional behavior, making easy work for things like custom markup, accessability, or additional click action. It is being piped through [@trbl/react-html-element](https://www.npmjs.com/package/@trbl/react-html-element) to give you complete control over the DOM.

```jsx
  import React, { useState } from 'react';
  import { ModalToggler } from '@trbl/react-modal';

  const MyComponent = () => (
    <ModalToggler
      slug="modal1"
      id="some-id"
      className="some-additional-class"
      htmlElement="span"
      htmlAttributes={{
        aria-label: 'Click to toggle the modal.',
        onClick: () => console.count()
      }}
    >
      ...
    </ModalToggler>
  )
```

## Classes

```scss
  .trbl__modal-toggler {
    ...
    &--slug-modal1 {
      ...
      &--is-open {
        ...
      }
    }
  }
```

## Props

- #### `slug`
  Type: String
  Required

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
