import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from '@trbl/react-html-element';
import withModal from '../withModal';

const ModalToggler = (props) => {
  const {
    id,
    className,
    modal: {
      currentModal,
      toggle,
      classPrefix,
    },
    slug,
    style,
    htmlElement,
    htmlAttributes,
    children,
  } = props;

  const baseClass = `${classPrefix}__modal-toggler`;

  const mergedClasses = [
    baseClass,
    `${baseClass}--slug-${slug}`,
    currentModal === slug && `${baseClass}--slug-${slug}--is-open`,
    className,
  ].filter(Boolean).join(' ');

  const mergedAttributes = {
    ...htmlAttributes,
    onClick: () => {
      toggle(slug);
      if (typeof htmlAttributes.onClick === 'function') htmlAttributes.onClick();
    },
  };

  return (
    <HTMLElement
      {...{
        id,
        className: mergedClasses,
        style,
        htmlElement,
        htmlAttributes: mergedAttributes,
      }}
    >
      {children && children}
    </HTMLElement>
  );
};

ModalToggler.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'button',
  htmlAttributes: {},
  children: undefined,
};

ModalToggler.propTypes = {
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
  slug: PropTypes.string.isRequired,
  modal: PropTypes.shape({
    currentModal: PropTypes.string,
    toggle: PropTypes.func,
    classPrefix: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default withModal(ModalToggler);
