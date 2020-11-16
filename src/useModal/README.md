# useModal

A hook that provides the [modal context](../ModalProvider/README.md#provided-context). To consume the modal context in a class-based component, use the [withModal](../withModal/README.md) HOC.

## Usage

```jsx
export default ExampleComponent = () => {
  const { isOpen, modal } = useModal();
  const { currentModal } = modal;
  return (
    <p>
      {`Slug '${currentModal}' is currently ${isOpen ? 'open' : 'closed'}`}
    </p>
  );
};
```
