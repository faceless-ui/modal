import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import HTMLElement from '@trbl/react-html-element';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
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

    const {
      id,
      className,
      style,
      htmlElement,
      htmlAttributes,
      slug: slugFromProp,
      closeOnBlur,
      lockBodyScroll,
    } = props;

    const slug = slugFromArg || slugFromProp;
    const isOpen = currentModal === slug;

    useEffect(() => {
      if (isOpen) setCloseOnBlur(closeOnBlur);
    }, [isOpen, closeOnBlur, setCloseOnBlur]);

    const modalRef = useRef(null);

    const setModalRef = useCallback((node) => {
      modalRef.current = node;
    }, [modalRef]);

    useEffect(() => {
      if (modalRef.current) {
        if (isOpen && lockBodyScroll) disableBodyScroll(modalRef.current);
        else enableBodyScroll(modalRef.current);
      }
      return () => enableBodyScroll(modalRef.current);
    }, [modalRef, isOpen, lockBodyScroll]);

    if (containerRef) {
      const baseClass = `${classPrefix}__${itemBaseClass}`;

      const mergedClasses = [
        baseClass,
        `${baseClass}--slug-${slug}`,
        className,
      ].filter(Boolean).join(' ');

      const mergedAttributes = {
        role: htmlElement !== 'dialog' ? 'dialog' : undefined,
        open: isOpen,
        'aria-modal': true,
        'aria-label': !htmlAttributes['aria-labelledby'] ? slug : undefined,
        ...htmlAttributes,
      };

      return ReactDOM.createPortal(
        <CSSTransition
          timeout={transTime}
          in={currentModal === slug}
          classNames={generateTransitionClasses(baseClass)}
          appear
        >
          <HTMLElement
            {...{
              id: id || slug,
              className: mergedClasses,
              style,
              htmlElement,
              htmlAttributes: mergedAttributes,
            }}
            ref={setModalRef}
          >
            <ModalComponent
              {...{
                ...props,
                isOpen,
                modal,
              }}
            />
          </HTMLElement>
        </CSSTransition>,
        containerRef,
      );
    }
    return null;
  };

  ModalWrap.defaultProps = {
    id: undefined,
    className: undefined,
    style: {},
    htmlElement: 'dialog',
    htmlAttributes: {},
    slug: '',
    autoFocus: true,
    trapFocus: true,
    returnFocus: true,
    closeOnBlur: true,
    lockBodyScroll: true,
  };

  ModalWrap.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    htmlElement: PropTypes.string,
    htmlAttributes: PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      style: PropTypes.shape({}),
      onClick: PropTypes.func,
    }),
    slug: PropTypes.string,
    autoFocus: PropTypes.bool,
    trapFocus: PropTypes.bool,
    returnFocus: PropTypes.bool,
    closeOnBlur: PropTypes.bool,
    lockBodyScroll: PropTypes.bool,
  };

  return ModalWrap;
};

export default asModal;
