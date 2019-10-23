import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import withModalContext from '../withModalContext';
import containerBaseClass from '../ModalContainer/baseClass';
import itemBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

const asModal = (ModalComponent, slug) => {
  const ModalWrap = (props) => {
    const {
      modal: {
        currentModal,
        classPrefix,
        containerIsMounted,
        transTime,
      },
    } = props;

    if (containerIsMounted) {
      const modalContainer = document.getElementById(`${classPrefix}__${containerBaseClass}`);
      const baseClass = `${classPrefix}__${itemBaseClass}`;
      const classes = [
        baseClass,
        `${baseClass}--slug-${slug}`,
      ].filter(Boolean).join(' ');

      return ReactDOM.createPortal(
        <CSSTransition
          timeout={transTime}
          in={currentModal === slug}
          classNames={generateTransitionClasses(baseClass)}
          appear
        >
          <div className={classes}>
            <ModalComponent
              {...props}
              isOpen={currentModal === slug}
            />
          </div>
        </CSSTransition>,
        modalContainer,
      );
    }
    return null;
  };

  return withModalContext(ModalWrap);
};

export default asModal;
