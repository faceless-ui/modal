import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import useModal from '../useModal';
import itemBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

const asModal = (ModalComponent, slugFromArg) => {
  const ModalWrap = (props) => {
    const modal = useModal();

    const {
      currentModal,
      classPrefix,
      containerRef,
      transTime,
    } = modal;

    const { slug: slugFromProp } = props;

    if (containerRef) {
      const baseClass = `${classPrefix}__${itemBaseClass}`;
      const slug = slugFromArg || slugFromProp;
      const isOpen = currentModal === slug;

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
              {...{
                ...props,
                isOpen,
                modal,
              }}
            />
          </div>
        </CSSTransition>,
        containerRef,
      );
    }
    return null;
  };

  ModalWrap.defaultProps = {
    slug: '',
  };

  ModalWrap.propTypes = {
    slug: PropTypes.string,
  };

  return ModalWrap;
};

export default asModal;
