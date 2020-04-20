# withModal

A higher-order component that provides the [modal context](../ModalProvider/README.md#provided-context) to your component as props, keyed to `modal`. This way any changes in the context will flow through your component lifecycle. To consume the modal context in a functional component, consider the [useModal](../useModal/README.md) hook.

## Usage

Wrap your component when its defined.

```jsx
  import React from 'react';
  import { withModal } from '@trbl/react-modal';

  export default SomeComponent = withModal((props) => {
    const { modal } = props;
    return <p>{modal.currentModal}</p>;
  });
```

Or wrap your component on export, also useful when chaining higher-order components.

```jsx
  import React from 'react';
  import { withModal } from '@trbl/react-modal';

  class SomeComponent extends Component {
    render() {
      const { modal } = this.props;
      return <p>{modal.currentModal}</p>;
    }
  };

  export default withModal(SomeComponent);
```
