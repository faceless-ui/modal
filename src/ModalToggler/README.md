# Modal Toggler

Plug-and-play solution to open and close modals. Provides a common pattern for the vast majority of use cases, including hamburger menus. For additional control, interact with the [modal context](../ModalProvider/README.md#provided-context) directly with the [useModal](../useModal/README.md) hook or the [withModal](../withModal/README.md) HOC.

- [Usage](#usage)
- [Accessibility](#accessibility)
- [Classes](#classes)
- [Props](#props)

## Usage

Give it a valid slug to an existing modal, along with some children, and voila. Render it anywhere in your app as a descendent of [ModalProvider](../ModalProvider/README.md).

```jsx
<ModalToggler
  slug="exampleModal"
  id="exampleID"
  className="exampleClassName"
  style={{ ... }}
  htmlElement="div"
  htmlAttributes={{ ... }}
>
  ...
</ModalToggler>
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
