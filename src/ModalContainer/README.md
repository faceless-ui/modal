# ModalContainer

Every modal will render into this container via React Portal. You can place this component anywhere in the app, most often top level to prevent a deeply nested stacking order. This allows any desired modal to be defined anywhere in the app but render top-level, which is helpful when passing data without the need to lift state, drills props, or create a Redux action.

This component is a consumer of the ModalContext, and therefore takes the responsibity of showing and hiding based on the `ModalContext.isOpen()` method. This allows every component passing through the `asModal` higher order component to only be concerned with its own content and its own styles, without worrying about whether it should show or hide, and the styles that come along with that.

**Important:** Only one of instance of this component can be present in the app, since it is being targeted via the id attribute and receiving portaled children.
