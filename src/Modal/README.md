# Modal

A simple component that wraps its children with [asModal](../asModal/README.md). This can be useful if your markup is concise, and you want to quickly render a modal amongst other content without extracting it out into a dedicated component. Accepts optional [render props](#render-props).

- [Usage](#usage)
- [Render props](#render-props)

### Usage

```jsx
<Modal
  slug="exampleModal"
  id="exampleID"
  className="exampleClassName"
  closeOnBlur
  lockBodyScroll
  htmlElement="div"
  style={{ ... }}
  htmlAttributes={{ ... }}
>
```

### Render props

Optionally accepts a [function as a child](https://reactjs.org/docs/render-props.html). Returns [isOpen](../asModal/README.md#isOpen) and the [modal context](../ModalProvider/README.md#provided-context).

```jsx
<Modal slug="exampleModal">
  {(modal, isOpen) => {
    const { isOpen, modal } = props;
    const { currentModal } = modal;
    return (
      <p>
        {`Slug '${currentModal}' is currently ${isOpen ? 'open' : 'closed'}`}
      </p>
    );
  }}
</Modal>
```
