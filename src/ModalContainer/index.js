import React, { Component } from 'react';
import ModalContext from '../ModalProvider/context';
import styled from 'styled-components';

class ModalContainer extends Component {
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
    const { isMounted } = this.state;
    const { isAnyOpen } = this.context;
    const baseClass = 'modal-container';
    
    const isOpen = isMounted && isAnyOpen();

    return (
      <Wrapper id={baseClass} isOpen={isOpen} />
    );
  }
}

const Wrapper = styled.div`
  transform: translateZ(0);
	transition: all 200ms ease;
	visibility: hidden;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
  background: rgba(black, .75);
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  z-index: ${props => props.isOpen ? '39' : '-1'};
  
  & > * {
    transition: 200ms ease;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  }
`

ModalContainer.contextType = ModalContext;

export default ModalContainer;
