# asModal

A higher-order component used to instantiate a modal. Portals your content into [ModalContainer](../ModalContainer/README.md). Also provides transition classes and accessibility. Inherits [isOpen](#isOpen) and the [modal context](../ModalProvider/README.md#provided-context). For an inline approach, try [Modal](../Modal/README.md).

## Usage

Wrap your component when its defined.

```jsx
  import React from 'react';
  import { asModal } from '@trbl/react-modal';

  export default SomeComponent = asModal((props) => {
    const { isOpen } = props;
    return <p>{isOpen}</p>;
  }, 'modal1');
```

Or wrap your component on export, also useful when chaining higher-order components.

```jsx
  import React from 'react';
  import { asModal } from '@trbl/react-modal';

  class SomeComponent extends Component {
    render() {
      const { isOpen } = this.props;
      return <p>{isOpen}</p>;
    }
  };

  export default asModal(SomeComponent, 'modal1');
```

Or for dynamically rendered modals, you can set the slug as a prop instead of an argument:

```jsx
  import React from 'react';
  import { asModal } from '@trbl/react-modal';

  const SomeComponent = asModal(() => (
    <div>Modal 1</div>
  ));

  const App = () => (
    <SomeComponent slug="modal1" />
  );

  export default App;
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
