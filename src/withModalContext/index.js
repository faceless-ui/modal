import React from 'react';
import ModalContext from '../ModalProvider/context';

const WithModalContext = (PassedComponent) => {
  const ModalContextWrap = (props) => (
    <ModalContext.Consumer>
      {(context) => (
        <PassedComponent
          {...{
            ...props,
            ...context,
          }}
        />
      )}
    </ModalContext.Consumer>
  );
  return ModalContextWrap;
};

export default WithModalContext;
