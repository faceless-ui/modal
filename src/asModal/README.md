# asModal

A higher-order component used to instantiate a modal. Portals your content into [ModalContainer](../ModalContainer/README.md). Supplies context, transition classes, and accessibility. Inherits [isOpen](#isOpen) and the [modal context](../ModalProvider/README.md#provided-context). Or use [Modal](../Modal/README.md) instead.

`asModal(ModalComponent, slug = optional)`

- [Usage](#usage)
- [Accessibility](#accessibility)
- [Classes](#classes)
- [Args](#args)
- [Props](#props)
- [Inherited Props](#inherited-props)

## Usage

```jsx
import React from 'react';
import { asModal } from '@faceless-ui/modal';

export default ExampleModal = asModal((props) => {
  const { isOpen, modal } = props;
  const { currentModal } = modal;
  return (
    <p>
      {`Slug '${currentModal}' is currently ${isOpen ? 'open' : 'closed'}`}
    </p>
  );
}, 'exampleModal');
```

And then render it somewhere.

```jsx
<ExampleModal
  // slug={dynamicSlug} if omitted from above, useful for dynamically rendered modals
  id="exampleID"
  className="exampleClassName"
  closeOnBlur
  lockBodyScroll
  htmlElement="div"
  style={{ ... }}
  htmlAttributes={{ ... }}
>
```

## Accessibility

Complies with the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines on [dialog containers](https://www.w3.org/TR/wai-aria-practices/#dialog_roles_states_props), all of which can be modified at your discretion.

- #### `id`
  Defaults to the modal slug, is referenced by the [aria-controls](../ModalToggler/README.md#aria-controls) of [ModalToggler](../ModalToggler/README.md).

- #### `aria-modal`
  Defaults to `true`, informs assistive technologies that underlying content is inert. Modals are given no visual style, so to further comply you may want to also obscure the outside content. [Close on blue](#closeOnBlur) and [handle focus](#focus-trapping) to also prevent user interaction with underlying content.

- #### `aria-label`
  Defaults to the modal slug only if [aria-labelledby](#aria-labelledby) is undefined, [as suggested](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)

- #### `aria-labelledby`
  Modals are not aware of their children, so you must explicitly set this property based on your content. Set to one or more IDs of the visible elements within your modal that most concisely describe the content, using a [space-delineated list](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute).

- #### `aria-describedby`
  Same as [above](#aria-labelledby) but with elements that best describe the primary purpose or message of the modal. Can be more verbose.

- #### `role`
  Set to `dialog` only if [htmlElement](#htmlElement) is not `dialog`)

- #### `open`
  Toggled `true` or `false` only if [htmlElement](#htmlElement) is `dialog`

- #### ~~`Focus Handling`~~
  ~~[autoFocus](#autoFocus), [trapFocus](#trapFocus), and [returnFocus](#returnFocus) are all enabled by default.~~

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
  Type: `Node`\
  Required

- #### `slug`
  Type: `String`\
  Optional\
  Notes: Or use the `slug` prop.

## Props

- #### `slug`
  Type: `String`\
  Optional\
  Notes: Or the `slug` arg.

- #### `closeOnBlur`
  Type: `Boolean`\
  Optional\
  Default: `true`\
  Notes: If `true`, will trigger the open [ModalContainer](../ModalContainer/README.md) to close itself along with all open modals when it is clicked.

- #### `lockBodyScroll`
  Type: `Boolean`\
  Optional\
  Default: `true`\
  Notes: If `true`, will prevent the underlying [body from scrolling](https://www.npmjs.com/package/body-scroll-lock) while the modal is open.

- #### ~~`autoFocus`~~
  ~~Type: `Boolean`~~\
  ~~Optional~~\
  ~~Default: `true`~~\
  ~~Notes: Automatically focuses the first focusible element of the modal content.~~

- #### ~~`trapFocus`~~
  ~~Type: `Boolean`~~\
  ~~Optional~~\
  ~~Default: `true`~~\
  ~~Notes: Prevents the underlying interface from receiving focus by looping the focus of the modal content.~~

- #### ~~`returnFocus`~~
  ~~Type: `Boolean`~~\
  ~~Optional~~\
  ~~Default: `true`~~\
  ~~Notes: On close, returns focus to the element that originally opened the modal.~~

- #### `id`
  Type: `String`\
  Optional\
  Default: `slug`\
  Notes: Changes may effect [accessibility](#accessibility).

- #### `className`
  Type: `String`\
  Optional

- #### `style`
  Type: `Boolean`\
  Optional

- #### `htmlElement`
  Type: `String`\
  Optional\
  Default: `div`\

- #### `htmlAttributes`
  Type: `Object`\
  Optional\
  Notes: Changes may effect [accessibility](#accessibility).

## Inherited Props

- #### `isOpen`
  Type: `Boolean`

- #### `modal`
  Type: `Object`\
  Notes: Everything from the [modal context](../ModalProvider/README.md#provided-context).
