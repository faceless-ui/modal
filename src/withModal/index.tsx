import React from 'react';
import useModal from '../useModal';

const withModal = <P extends Record<string, unknown>>(
  PassedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const ModalContextWrap: React.FC<P> = (props) => {
    const modalContext = useModal();

    return (
      <PassedComponent
        {...{
          ...props,
          modal: modalContext,
        }}
      />
    );
  };

  return ModalContextWrap;
};

export default withModal;
