import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from '@faceless-ui/html-element';
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
  const isOpen = currentModal === slug;

  const mergedClasses = [
    baseClass,
    `${baseClass}--slug-${slug}`,
    isOpen && `${baseClass}--slug-${slug}--is-open`,
    className,
  ].filter(Boolean).join(' ');

  const mergedAttributes = {
    role: 'button',
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-controls': slug,
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
  slug: PropTypes.string.isRequired,
  modal: PropTypes.shape({
    currentModal: PropTypes.string,
    toggle: PropTypes.func,
    classPrefix: PropTypes.string,
  }).isRequired,
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
  children: PropTypes.node,
};

export default withModal(ModalToggler);
