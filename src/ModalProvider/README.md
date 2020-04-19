# Modal Provider

This is the global context that all components within this module will read from and interact with. Render a single instance anywhere within within your app, so long as its an ancestor of other components within this module.

## Usage

Lorem ipsum

```jsx

```

## Props

- #### `classPrefix`
  Type: String
  Optional

- #### `minifyCSS`
  Type: Boolean
  Optional
  Default: `true`

- #### `zIndex`
  Type: Number
  Optional
  Default: `9999`

- #### `transTime`
  Type: Number
  Optional
  Defaults: `1000`.
  Notes: Applies globally, or can be locally overridden on the `asModal` and `ModalToggler` components.

- #### `handleParamChange`
  Type: Boolean
  Optional
  Default: `false`

## Provided Context

- #### `containerNode`
  Type: Node
  Notes: A ref to the container that each modal will portal into, used by [Modal Container](../ModalContainer/README.md).

- #### `setContainerNode`
  Type: Function
  Notes: A method used to populate `containerNode`, used by [Modal Container](../ModalContainer/README.md).

- #### `oneIsOpen`
  Type: Boolean

- #### `currentModal`
  Type: String

- #### `closeAll`
  Type: Function

- #### `toggle`
  Type: Function

- #### `classPrefix`
  Type: String
  Notes: See [classPrefix](#class-prefix) above.

- #### `transTime`
  Type: Number

- #### `manuallyRerender`
  Type: Function
  Notes: Useful for single-page applications that...
