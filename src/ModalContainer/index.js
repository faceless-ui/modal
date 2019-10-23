import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withModalContext from '../withModalContext';
import containerBaseClass from './baseClass';

class ModalContainer extends Component {
  componentDidMount() {
    const { modal: { setContainerStatus } } = this.props;
    setContainerStatus(true);
  }

  componentWillUnmount() {
    const { modal: { setContainerStatus } } = this.props;
    setContainerStatus(false);
  }

  render() {
    const {
      className,
      modal: {
        oneIsOpen,
        classPrefix,
      },
    } = this.props;

    const baseClass = `${classPrefix}__${containerBaseClass}`;
    const classes = [
      baseClass,
      oneIsOpen && `${baseClass}--one-is-open`,
      className,
    ].filter(Boolean).join(' ');

    return (
      <div
        id={baseClass}
        className={classes}
      />
    );
  }
}

ModalContainer.defaultProps = {
  className: '',
};

ModalContainer.propTypes = {
  className: PropTypes.string,
  modal: PropTypes.shape({
    oneIsOpen: PropTypes.bool,
    classPrefix: PropTypes.string,
    setContainerStatus: PropTypes.func,
  }).isRequired,
};

export default withModalContext(ModalContainer);
