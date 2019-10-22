import React from 'react';
import ReactDOM from 'react-dom';
import withModalContext from '../withModalContext';

const asModal = (ModalComponent) => {
  const ModalWrap = (props) => {
    const {
      slug,
      currentModal,
      closeAllModals,
      classPrefix,
      containerIsMounted,
    } = props;

    if (containerIsMounted) {
      const modalContainer = document.getElementById(`${classPrefix}__modal-container`);

      return ReactDOM.createPortal(
        <ModalComponent
          {...props}
          isOpen={currentModal === slug}
          closeAllModals={closeAllModals}
        />,
        modalContainer,
      );
    }
    return null;
  };

  return withModalContext(ModalWrap);
};

export default asModal;
