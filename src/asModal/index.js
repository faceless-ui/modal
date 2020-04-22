import React, { useEffect } from 'react';
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
      setCloseOnBlur,
    } = modal;

    // TODO: pipe through @trbl/react-html-element

    const {
      slug: slugFromProp,
      closeOnBlur,
    } = props;

    const slug = slugFromArg || slugFromProp;
    const isOpen = currentModal === slug;

    useEffect(() => {
      if (isOpen) setCloseOnBlur(closeOnBlur);
    }, [isOpen, closeOnBlur, setCloseOnBlur]);

    if (containerRef) {
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
          <dialog // TODO: pipe through @trbl/react-html-element
            open={isOpen}
            className={classes}
            aria-modal="true"
            aria-label={slug} // TODO: remove if "aria-labelledby" is "undefined"
            // role="dialog" // TODO: remove if "htmlElement" is "dialog"
            id={slug}
          >
            <ModalComponent
              {...{
                ...props,
                isOpen,
                modal,
              }}
            />
          </dialog>
        </CSSTransition>,
        containerRef,
      );
    }
    return null;
  };

  ModalWrap.defaultProps = {
    slug: '',
    autoFocus: true,
    trapFocus: true,
    closeOnBlur: true,
  };

  ModalWrap.propTypes = {
    slug: PropTypes.string,
    autoFocus: PropTypes.bool,
    trapFocus: PropTypes.bool,
    closeOnBlur: PropTypes.bool,
  };

  return ModalWrap;
};

export default asModal;
