'use client'
import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useModal } from '../useModal/index.js';
import { generateTransitionClasses } from '../ModalProvider/generateTransitionClasses.js';
import { ModalProps } from '../Modal/index.js';
import { createFocusTrap, type FocusTrap }from 'focus-trap';

export const itemBaseClass = 'modal-item';

export const asModal = <P extends ModalProps>(
  ModalComponent: React.FC<P>,
  slugFromArg?: string,
): React.FC<P> => {
  const ModalWrap: React.FC<P> = (props) => {
    const modal = useModal();
    const modalRef = useRef(null);
    const [layTrap, setLayTrap] = useState(false);
    const trapHasBeenLayed = useRef(false);
    const [trap, setTrap] = useState<FocusTrap | null>(null);

    const {
      modalState,
      classPrefix: classPrefixFromContext,
      containerRef,
      transTime,
      setCloseOnBlur,
      setBodyScrollLock,
      openModal
    } = modal;

    const {
      className,
      htmlElement: Tag = 'dialog',
      slug: slugFromProp = '',
      closeOnBlur = true,
      lockBodyScroll = true,
      // autoFocus: true,
      // trapFocus: true,
      // returnFocus: true,
      classPrefix: classPrefixFromProps,
      onOpen,
      onClose,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      openOnInit,
      trapFocus = true,
      focusTrapOptions = {},
      ...rest
    } = props;

    const classPrefixToUse = classPrefixFromProps || classPrefixFromContext;
    const slug = slugFromArg || slugFromProp;

    const isInitialized = useRef(openOnInit);
    const isOpen = modalState[slug] && modalState[slug].isOpen;

    useEffect(() => {
      if (trapFocus) {
        const currentModal = modalRef.current;

        if (trapHasBeenLayed.current === false && currentModal) {
          const newTrap = createFocusTrap(currentModal, {
            ...focusTrapOptions,
            fallbackFocus: focusTrapOptions?.fallbackFocus || currentModal,
            allowOutsideClick: typeof focusTrapOptions.allowOutsideClick !== 'undefined' ? focusTrapOptions.allowOutsideClick : true,
          });
          setTrap(newTrap);
          trapHasBeenLayed.current = true;
        }
      }
    }, [
      trapFocus,
      layTrap,
      focusTrapOptions
    ])

    useEffect(() => {
      setLayTrap(true);
    }, [])

    useEffect(() => {
      if (trap) {
        if (isOpen) trap.activate();
        else trap.deactivate();
      }
      return () => {
        if (trap) trap.deactivate();
      }
    }, [
      isOpen,
      trap
    ])

    useEffect(() => {
      if (isOpen) setCloseOnBlur(closeOnBlur);
    }, [
      isOpen,
      closeOnBlur,
      setCloseOnBlur,
    ]);

    useEffect(() => {
      const currentModal = modalRef.current;

      if (currentModal) {
        if (isOpen && lockBodyScroll) {
          setBodyScrollLock(true, currentModal);
        } else {
          setBodyScrollLock(false, currentModal);
        }
      }

      return () => {
        if (currentModal) {
          setBodyScrollLock(false, currentModal);
        }
      }
    }, [
      isOpen,
      lockBodyScroll,
      setBodyScrollLock,
    ]);

    const [timedOpen, setTimedOpen] = useState(isOpen);

    useEffect(() => {
      if (!isOpen) setTimeout(() => setTimedOpen(false), transTime);
      else setTimedOpen(isOpen);
    }, [
      isOpen,
      transTime,
    ]);

    useEffect(() => {
      if (isOpen) {
        onOpen?.();
      } else if (isInitialized.current) {
        onClose?.();
      }

      if (!isInitialized.current) {
        isInitialized.current = true;
      }
    }, [
      isOpen,
      onOpen,
      onClose
    ]);

    useEffect(() => {
      if (openOnInit) {
        openModal(slug);
      }
    }, [
      slug,
      openOnInit,
      openModal
    ]);

    if (containerRef.current) {
      const baseClass = classPrefixToUse ? `${classPrefixToUse}__${itemBaseClass}` : itemBaseClass;

      const mergedClasses = [
        baseClass,
        `${baseClass}--slug-${slug}`,
        className,
      ].filter(Boolean).join(' ');

      const mergedAttributes = {
        role: Tag !== 'dialog' ? 'dialog' : undefined,
        open: Tag === 'dialog' ? timedOpen || isOpen : undefined,
        'aria-modal': true,
        'aria-label': !rest['aria-labelledby'] ? slug : undefined,
        ...rest,
      };

      return ReactDOM.createPortal(
        <CSSTransition
          {...{
            nodeRef: modalRef,
            timeout: transTime,
            in: isOpen,
            classNames: generateTransitionClasses(baseClass),
            appear: true,
            onEnter,
            onEntering,
            onEntered,
            onExit,
            onExiting,
            onExited,
          }}
        >
          <Tag
            {...{
              ref: modalRef,
              id: rest?.id || slug,
              className: mergedClasses,
              ...mergedAttributes,
            }}
          >
            <ModalComponent
              {...{
                ...props,
                isOpen,
                modal,
              }}
            />
          </Tag>
        </CSSTransition>,
        containerRef.current,
      );
    }
    return null;
  };

  return ModalWrap;
};
