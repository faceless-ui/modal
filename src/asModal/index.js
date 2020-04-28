import React, { useRef, useEffect, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import HTMLElement from '@trbl/react-html-element';
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
      open,
      setBodyScrollLock,
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
    const isFirstRender = useRef(true);

    const isOpen = currentModal === slug;

    useEffect(() => {
      // useful to maintain a true oneIsOpen provider state that is only
      // ever true if the slug URL parameter matches a mounted modal slug.
      // i.e. ModalContainer will be protected from erroneously opening.
      if (isFirstRender) {
        if (isOpen) open(slug);
        isFirstRender.current = false;
      }
    }, [isOpen, open, isFirstRender, slug]);

    useEffect(() => {
      if (isOpen) setCloseOnBlur(closeOnBlur);
    }, [isOpen, closeOnBlur, setCloseOnBlur]);

    const modalRef = useRef(null);

    const setModalRef = useCallback((node) => {
      modalRef.current = node;
    }, [modalRef]);

    useEffect(() => {
      if (modalRef.current) {
        if (isOpen && lockBodyScroll) setBodyScrollLock(true, modalRef);
        else setBodyScrollLock(false, modalRef);
      }
    }, [isOpen, lockBodyScroll, setBodyScrollLock]);

    useEffect(() => () => setBodyScrollLock(false, modalRef), [setBodyScrollLock]);

    const [timedOpen, setTimedOpen] = useState(isOpen);

    useEffect(() => {
      if (!isOpen) setTimeout(() => setTimedOpen(false), transTime);
      else setTimedOpen(isOpen);
    }, [isOpen, transTime]);

    if (containerRef.current) {
      const baseClass = `${classPrefix}__${itemBaseClass}`;

      const mergedClasses = [
        baseClass,
        `${baseClass}--slug-${slug}`,
        className,
      ].filter(Boolean).join(' ');

      const mergedAttributes = {
        role: htmlElement !== 'dialog' ? 'dialog' : undefined,
        open: htmlElement === 'dialog' ? timedOpen || isOpen : undefined,
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
        containerRef.current,
      );
    }
    return null;
  };

  ModalWrap.defaultProps = {
    slug: '',
    closeOnBlur: true,
    lockBodyScroll: true,
    // autoFocus: true,
    // trapFocus: true,
    // returnFocus: true,
    id: undefined,
    className: undefined,
    style: {},
    htmlElement: 'dialog',
    htmlAttributes: {},
  };

  ModalWrap.propTypes = {
    slug: PropTypes.string,
    closeOnBlur: PropTypes.bool,
    lockBodyScroll: PropTypes.bool,
    // autoFocus: PropTypes.bool,
    // trapFocus: PropTypes.bool,
    // returnFocus: PropTypes.bool,
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
  };

  return ModalWrap;
};

export default asModal;
