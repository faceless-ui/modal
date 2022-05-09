import React, { MouseEvent, ElementType, HTMLProps } from 'react';
import { CSSTransition } from 'react-transition-group';
import useModal from '../useModal';
import containerBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

export type Props = HTMLProps<HTMLElement> & {
  htmlElement?: ElementType
  children?: React.ReactNode
}

const ModalContainer: React.FC<Props> = (props) => {
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
    htmlElement = 'div',
    children,
    onClick,
    ...rest
  } = props;

  const baseClass = `${classPrefix}__${containerBaseClass}`;

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

  const Tag = htmlElement as React.ElementType;

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
