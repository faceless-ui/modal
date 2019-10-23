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
      const baseName = `${classPrefix}__modal-item`;

      return ReactDOM.createPortal(
        <div className={currentModal === slug ? `${baseName}--is-open` : baseName}>
          <ModalComponent
            {...props}
            isOpen={currentModal === slug}
            closeAllModals={closeAllModals}
          />
        </div>,
        modalContainer,
      );
    }
    return null;
  };

  return withModalContext(ModalWrap);
};

export default asModal;
