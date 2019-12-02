import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import withModalContext from '../withModalContext';
import containerBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

class ModalContainer extends Component {
  constructor() {
    super();
    this.containerRef = createRef();
  }

  componentDidMount() {
    const { modal: { setContainerNode } } = this.props;
    setContainerNode(this.containerRef.current);
  }

  componentWillUnmount() {
    const { modal: { setContainerNode } } = this.props;
    setContainerNode(undefined);
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
          ref={this.containerRef}
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
    setContainerNode: PropTypes.func,
    transTime: PropTypes.number,
  }).isRequired,
};

export default withModalContext(ModalContainer);
