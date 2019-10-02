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
    const { slug, children, className, wrapWithDiv, ariaLabel } = this.props;
    const { isMounted } = this.state;
    const { isSlugOpen, toggleModal } = this.context;

    const classes = [
      this.baseClass,
      isMounted && isSlugOpen(slug) && 'is-open',
      className,
    ].filter(Boolean).join(' ');

    if (wrapWithDiv) {
      return (
        <div
          className={classes}
          role="button"
          tabIndex="0"
          onClick={() => toggleModal(slug)}
        >
          {children}
        </div>
      );
    }

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
  wrapWithDiv: false,
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
  wrapWithDiv: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default ModalToggler;
