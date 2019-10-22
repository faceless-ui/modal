import React from 'react';
import ModalContext from '../ModalProvider/context';

const WithModalContext = (PassedComponent) => {
  const ModalContextWrap = (props) => {
    return (
      <ModalContext.Consumer>
        {(context) => {
          return (
            <PassedComponent
              {...{
                ...props,
                ...context,
              }}
            />
          );
        }}
      </ModalContext.Consumer>
    );
  };
  return ModalContextWrap;
};

export default WithModalContext;
