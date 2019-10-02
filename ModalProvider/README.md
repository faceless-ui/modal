# ModalProvider

This provider centralizes the various methods and properties needed to control the modal, such as a means of opening, closing, and checking the modal status (which involves interacting with the window object), or binding the escape key.

Every child of this component that is subscribed to the ModalContext will read from this ModalProvider's context value and access to these various methods and properties. Subscribing a child can be done whether it is class-based or functional, but note, only functional components that subscribe via `ModalContext.Consumer` will _re-render_ when the context changes (class-based components subscribe via `this.context` and do not re-render upon context changes).

**Important:** This component should be places top level in the app, as it renders all its children with no side-effects.
