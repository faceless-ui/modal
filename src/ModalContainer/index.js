import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import HTMLElement from '@trbl/react-html-element';
import useModal from '../useModal';
import containerBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

const ModalContainer = (props) => {
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
    style,
    htmlElement,
    htmlAttributes,
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

  return (
    <CSSTransition
      in={oneIsOpen}
      timeout={transTime}
      classNames={generateTransitionClasses(baseClass)}
      appear
    >
      <HTMLElement
        {...{
          id,
          className: mergedClasses,
          style,
          htmlElement,
          htmlAttributes: mergedAttributes,
        }}
        ref={setContainerRef}
      />
    </CSSTransition>
  );
};

ModalContainer.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
};

ModalContainer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({
    onClick: PropTypes.func,
  }),
};

export default ModalContainer;
