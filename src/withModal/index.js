import React from 'react';
import ModalContext from '../ModalProvider/context';

const withModal = (PassedComponent) => {
  const ModalContextWrap = (props) => (
    <ModalContext.Consumer>
      {(context) => (
        <PassedComponent
          {...{
            ...props,
            modal: {
              ...context,
            },
          }}
        />
      )}
    </ModalContext.Consumer>
  );
  return ModalContextWrap;
};

export default withModal;
