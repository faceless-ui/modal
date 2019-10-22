import React from 'react';
import PropTypes from 'prop-types';
import withModalContext from '../withModalContext';

const ModalToggler = (props) => {
  const {
    slug,
    children,
    className,
    ariaLabel,
    currentModal,
    toggleModal,
    classPrefix,
  } = props;

  const baseClass = `${classPrefix}__modal-toggler`;

  const classes = [
    baseClass,
    currentModal === slug && `${baseClass}--is-open`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      type="button"
      aria-label={ariaLabel}
      onClick={() => toggleModal(slug)}
    >
      {children}
    </button>
  );
};

ModalToggler.defaultProps = {
  className: '',
  ariaLabel: '',
};

ModalToggler.propTypes = {
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  ariaLabel: PropTypes.string,
  currentModal: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  classPrefix: PropTypes.string.isRequired,
};

export default withModalContext(ModalToggler);
