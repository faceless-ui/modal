import React from 'react';
import { CSSTransition } from 'react-transition-group';
import useModal from '../useModal';
import containerBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';
import { Props } from './types';

const ModalContainer: React.FC<Props> = (props) => {
  const {
    oneIsOpen,
    classPrefix,
    transTime,
    setContainerRef,
    closeAll,
    closeOnBlur,
  } = useModal();

  const {
    id,
    className,
    style = {},
    htmlElement = 'div',
    htmlAttributes = {},
    children,
  } = props;

  const baseClass = `${classPrefix}__${containerBaseClass}`;

  const mergedClasses = [
    baseClass,
    className,
  ].filter(Boolean).join(' ');

  const mergedAttributes = {
    ...htmlAttributes,
    onClick: () => {
      if (closeOnBlur) closeAll();
      if (typeof htmlAttributes.onClick === 'function') htmlAttributes.onClick();
    },
  };

  const Tag = htmlElement as React.ElementType;

  return (
    <CSSTransition
      in={oneIsOpen}
      timeout={transTime}
      classNames={generateTransitionClasses(baseClass)}
      appear
    >
      <Tag
        {...{
          id,
          className: mergedClasses,
          style,
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
