import React, { MouseEvent, ElementType, HTMLProps } from 'react';
import { CSSTransition } from 'react-transition-group';
import useModal from '../useModal';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

export const containerBaseClass = 'modal-container';

export type ModalContainerProps = HTMLProps<HTMLElement> & {
  htmlElement?: ElementType
  children?: React.ReactNode
}

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
  const {
    oneIsOpen,
    classPrefix,
    transTime,
    setContainerRef,
    containerRef,
    closeAll,
    closeOnBlur,
  } = useModal();

  const {
    className,
    htmlElement: Tag = 'div',
    children,
    onClick,
    ...rest
  } = props;

  const baseClass = classPrefix ? `${classPrefix}__${containerBaseClass}` : containerBaseClass;

  const mergedClasses = [
    baseClass,
    className,
  ].filter(Boolean).join(' ');

  const mergedAttributes = {
    ...rest,
    onClick: (e: MouseEvent<HTMLElement>) => {
      if (closeOnBlur) closeAll();
      if (typeof onClick === 'function') onClick(e);
    },
  };

  return (
    <CSSTransition
      nodeRef={containerRef}
      in={oneIsOpen}
      timeout={transTime}
      classNames={generateTransitionClasses(baseClass)}
      appear
    >
      <Tag
        {...{
          className: mergedClasses,
          ref: setContainerRef,
          ...mergedAttributes,
        }}
      >
        {children && children}
      </Tag>
    </CSSTransition>
  );
};

export default ModalContainer;
