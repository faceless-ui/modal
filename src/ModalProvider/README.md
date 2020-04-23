# Modal Provider

Provides context for all components to subscribe to and interact with. Can also set and remove URL parameters using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API), making it possible share direct links, open on load, or navigate with the back button. Opt-in, or provide [your own router](#routing).

## Usage

Render a single instance anywhere within within your app, so long as its an ancestor of other components within this module.

```jsx
  import React from 'react';
  import { ModalProvider } from '@trbl/react-modal';

  export default App = () => (
    <ModalProvider>
      ...
    </ModalProvider>
  )
```

### Routing

Set and remove URL parameters using the [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

```jsx
  import React from 'react';
  import { ModalProvider } from '@trbl/react-modal';

  export default App = () => (
    <ModalProvider handleParamChange>
      ...
    </ModalProvider>
  )
```

If your app already uses a router, send a callback function to [handleParamChange](#handleParamChange).

```jsx
  import React, { useCallback, useEffect } from 'react';
  import { ModalProvider } from '@trbl/react-modal';
  import Router from 'next/router';

  const HandleRoutingEvents = (props) => {
    const { children } = props;

    const handleParamChange = useCallback((slug) => {
      Router.push({
        query: { modal: slug },
      })
    }. [Router])

    return children;
  }

  const MyApp = () => (
    <ModalProvider
      classPrefix="demo"
      transTime={1000}
      handleParamChange={handleParamChange}
      generateCSS={false}
    >
      <HandleRoutingEvents>
        ...
      </HandleRoutingEvents>
    </ModalProvider>
  )
```

## Accessibility

Complies with the [WAI-ARIA](https://www.w3.org/WAI/intro/aria) guidelines on [keyboard interaction](https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-7), all of which can be modified at your discretion.

- #### `esc`
  Binds the [closeAll](#closeall) method to the escape key.

## Props

- #### `classPrefix`
  Type: `String` or `Boolean`\
  Optional\
  Default: trbl\
  Notes: If `string`, prepends onto every class name, useful for unique namespacing within complex stylesheets. Alternatively, just add additional class names [to](../ModalContainer/README.md#className) [any](../ModalToggler/README.md#className) [component](../asModal/README.md#className). Set to `false` to disable prefixing altogether.

- #### `generateCSS`
  Type: `Boolean`\
  Optional\
  Default: `true`\
  Notes: Generates a tiny CSS stylesheet (~650B) to render at the root of the provider. Used for positioning and transition timing, _not_ visual styling. Relevant to the vast majority of use cases.

- #### `minifyCSS`
  Type: `Boolean`\
  Optional\
  Default: `true`\
  Notes: Minifies the result of [generateCSS](#generateCSS).

- #### `zIndex`
  Type: `Number`\
  Optional\
  Default: `9999`\
  Notes: Only used when [generateCSS](#generateCSS) is `true`. Determines the stacking order of the [Modal Container](../ModalContainer/README.md).

- #### `transTime`
  Type: `Number`\
  Optional\
  Defaults: `1000`\
  Notes: Determines the duration by which transition classes are applied, in milliseconds.

- #### `handleParamChange`
  Type: `Boolean` or `Callback`\
  Optional\
  Default: `false`\
  Notes: If `true`, will set and reset the `modal` URL parameter using [pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) from the [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). If sent a `callback`, will execute your function with a slug for you to process.

## Provided Context

- #### `containerRef`
  Type: `Ref`\
  Notes: The container that each modal will portal into, used by [Modal Container](../ModalContainer/README.md)

- #### `setContainerRef`
  Type: `Method`\
  Args: Reference\
  Notes: Used by [Modal Container](../ModalContainer/README.md) to populate `containerRef` on mount.

- #### `oneIsOpen`
  Type: `Boolean`\
  Notes: `true` when [currentModal](#currentModal) has value. Triggers transition states on the [Modal Container](../ModalContainer).

- #### `currentModal`
  Type: `String`\
  Notes: Slug of the currently open modal.

- #### `closeAll`
  Type: `Method`\
  Args: None\
  Notes: Resets [currentModal](#currentModal) and [oneIsOpen](#oneIsOpen). Will either remove `modal` from the URL parameters or fire the given callback function based on [handleParamChange](#handleParamChange).

- #### `closeOnBlur`
  Type: `Boolean`\
  Notes: Enables a click event on the [Modal Container](../ModalContainer/README.md) that will close all modals.

- #### `setCloseOnBlur`
  Type: `Method`\
  Args: Boolean\
  Notes: Sets the [closeOnBlur](#closeOnBlur) status. Fired each time a modal is opened based on its own [closeOnBlur](../asModal/README.md#closeOnBlur) prop.

- #### `open`
  Type: `Method`\
  Args: Slug\
  Notes: Sets [currentModal](#closeAll) to the given slug and [oneIsOpen](#oneIsOpen) to `true`. Will either add `modal` to the URL parameters or fire the given callback function based on [handleParamChange](#handleParamChange).

- #### `toggle`
  Type: `Method`\
  Args: Slug\
  Notes: Will [closeAll](#closeAll) if the given slug is currently open, otherwise will [open](#open) the given slug.

- #### `classPrefix`
  Type: `String`\
  Notes: See [classPrefix](#classPrefix) above.

- #### `transTime`
  Type: `Number`\
  Notes: See [transTime](#transTime) above.
