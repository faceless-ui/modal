import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withModalContext from '../withModalContext';
import containerBaseClass from './baseClass';

class ModalContainer extends Component {
  componentDidMount() {
    const { setContainerStatus } = this.props;
    setContainerStatus(true);
  }

  componentWillUnmount() {
    const { setContainerStatus } = this.props;
    setContainerStatus(false);
  }

  render() {
    const {
      oneIsOpen,
      classPrefix,
      className,
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
  oneIsOpen: PropTypes.bool.isRequired,
  classPrefix: PropTypes.string.isRequired,
  setContainerStatus: PropTypes.func.isRequired,
};

export default withModalContext(ModalContainer);
