# Modal Container

The DOM node that all modals will portal into. Render a single instance anywhere within your app, so long as its a descendent of [ModalProvider](../ModalProvider/README.md). Apply css here for a global affect, such as a shared background overlay or transition.

- [Usage](#usage)
- [Classes](#classes)
- [Props](#props)

## Usage

```jsx
<ModalContainer
  id="exampleID"
  className="exampleClassName"
  htmlElement="div"
  style={{ ... }}
  htmlAttributes={{ ... }}
/>
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
