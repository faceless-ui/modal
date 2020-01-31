import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from '@trbl/react-html-element';
import withModalContext from '../withModalContext';

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

  const classes = [
    baseClass,
    `${baseClass}--slug-${slug}`,
    currentModal === slug && `${baseClass}--slug-${slug}--is-open`,
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    toggle(slug);
    if (htmlAttributes.onClick === 'function') htmlAttributes.onClick();
  };

  return (
    <HTMLElement
      className={classes}
      {...{
        id,
        style,
        htmlElement,
      }}
      onClick={handleClick}
    >
      {children && children}
    </HTMLElement>
  );
};

ModalToggler.defaultProps = {
  id: '',
  className: '',
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

export default withModalContext(ModalToggler);
