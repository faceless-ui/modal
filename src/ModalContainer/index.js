import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import withModalContext from '../withModalContext';
import containerBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

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
        transTime,
      },
    } = this.props;

    const baseClass = `${classPrefix}__${containerBaseClass}`;
    const classes = [
      baseClass,
      className,
    ].filter(Boolean).join(' ');

    return (
      <CSSTransition
        in={oneIsOpen}
        timeout={transTime}
        classNames={generateTransitionClasses(baseClass)}
        appear
      >
        <div
          id={baseClass}
          className={classes}
        />
      </CSSTransition>
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
    transTime: PropTypes.number,
  }).isRequired,
};

export default withModalContext(ModalContainer);
