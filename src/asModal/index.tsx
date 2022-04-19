import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import useModal from '../useModal';
import itemBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';
import { ModalProps } from '../Modal';

const asModal = <P extends ModalProps>(
  ModalComponent: React.FC<P>,
  slugFromArg?: string,
): React.FC<P> => {
  const ModalWrap: React.FC<P> = (props) => {
    const modal = useModal();
    const modalRef = useRef(null);

    const {
      currentModal,
      classPrefix: classPrefixFromContext,
      containerRef,
      transTime,
      setCloseOnBlur,
      open,
      setBodyScrollLock,
    } = modal;

    const {
      id,
      className,
      style = {},
      htmlElement = 'dialog',
      htmlAttributes = {},
      slug: slugFromProp = '',
      closeOnBlur = true,
      lockBodyScroll = true,
      // autoFocus: true,
      // trapFocus: true,
      // returnFocus: true,
      classPrefix: classPrefixFromProps,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      openOnInit,
    } = props;

    const classPrefixToUse = classPrefixFromProps || classPrefixFromContext;
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
    }, [
      isOpen,
      open,
      isFirstRender,
      slug,
    ]);

    useEffect(() => {
      if (isOpen) setCloseOnBlur(closeOnBlur);
    }, [
      isOpen,
      closeOnBlur,
      setCloseOnBlur,
    ]);

    useEffect(() => {
      if (modalRef.current) {
        if (isOpen && lockBodyScroll) {
          setBodyScrollLock(true, modalRef);
        } else {
          setBodyScrollLock(false, modalRef);
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
      if (openOnInit) {
        open(slug);
      }
    }, [
      slug,
      openOnInit,
      open,
    ]);

    if (containerRef.current) {
      const baseClass = `${classPrefixToUse}__${itemBaseClass}`;

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

      const Tag = htmlElement as React.ElementType;

      return ReactDOM.createPortal(
        <CSSTransition
          {...{
            nodeRef: modalRef,
            timeout: transTime,
            in: currentModal === slug,
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
              id: id || slug,
              className: mergedClasses,
              style,
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

export default asModal;
