# withModal

A higher-order component that provides the [modal context](../ModalProvider/README.md#provided-context) to your component as props, keyed as `modal`. To consume the modal context in a functional component, consider the [useModal](../useModal/README.md) hook.

## Usage

Wrap your component when its defined.

```jsx
export default ExampleComponent = withModal((props) => {
  const { isOpen, modal } = props;
  const { currentModal } = modal;
  return (
    <p>
      {`Slug '${currentModal}' is currently ${isOpen ? 'open' : 'closed'}`}
    </p>
  );
});
```
