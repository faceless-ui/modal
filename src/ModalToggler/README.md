# Modal Toggler

A plug-and-play solution for toggling modal windows, complete with class names and accessibility. Provides a common pattern for the vast majority of use cases, including hamburger menus. For additional control, try [useModal](../useModal/README.md) or [withModal](../withModal/README.md).

## Usage

Give it a valid slug to an existing modal, along with some children, and voila. Render it anywhere in your app as a descendent of [ModalProvider](../ModalProvider/README.md).

```jsx
  import React from 'react';
  import { ModalToggler } from '@trbl/react-modal';

  export default SomeComponent = () => (
    <ModalToggler slug="modal1">
      ...
    </ModalToggler>
  )
```

Customize the markup, add additional click behavior, anything you want.

```jsx
  import React, { useState } from 'react';
  import { ModalToggler } from '@trbl/react-modal';

  const SomeComponent = () => (
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

## Accessibility

Complies with the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines on [Disclosure (Show/Hide)](https://www.w3.org/TR/wai-aria-practices/#disclosure), all of which can be modified at your discretion.

- #### `htmlElement`
  Defaults to `button`.

- #### `role`
  Defaults to `button`.

- #### `aria-expanded`
  Toggled `true` or `false` based on the status of the controlled modal.

- #### `aria-controls`
  Defaults to the `id` of the controlled modal, which is the slug.

## Classes

```scss
  .modal-toggler {
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
  Type: `String`\
  Required

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
  Default: `button`\
  Notes: Changes may effect [accessibility](#accessibility).

- #### `htmlAttributes`
  Type: `Object`\
  Optional\
  Notes: Changes may effect [accessibility](#accessibility).
