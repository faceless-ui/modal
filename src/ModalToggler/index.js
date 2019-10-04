import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '../ModalProvider/context';

const baseClass = 'modal-toggler';

class ModalToggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const { slug, children, className, ariaLabel } = this.props;
    const { isMounted } = this.state;
    const { isSlugOpen, toggleModal } = this.context;

    const classes = [
      baseClass,
      isMounted && isSlugOpen(slug) && `${baseClass}--is-open`,
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
  }
}

ModalToggler.contextType = ModalContext;

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
};

export default ModalToggler;
