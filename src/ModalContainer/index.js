import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import HTMLElement from '@trbl/react-html-element';
import withModal from '../withModal';
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
      id,
      className,
      style,
      htmlElement,
      htmlAttributes,
      modal: {
        oneIsOpen,
        classPrefix,
        transTime,
      },
    } = this.props;

    const baseClass = `${classPrefix}__${containerBaseClass}`;

    const mergedClasses = [
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
        <HTMLElement
          {...{
            id,
            className: mergedClasses,
            style,
            htmlElement,
            htmlAttributes,
          }}
          ref={this.containerRef}
        />
      </CSSTransition>
    );
  }
}

ModalContainer.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
};

ModalContainer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({}),
  modal: PropTypes.shape({
    oneIsOpen: PropTypes.bool,
    classPrefix: PropTypes.string,
    setContainerNode: PropTypes.func,
    transTime: PropTypes.number,
  }).isRequired,
};

export default withModal(ModalContainer);
