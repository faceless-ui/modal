import React, { Fragment, Component } from 'react';
import ModalContext from '../ModalProvider/context';

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
    const { isAnyOpen, classPrefix } = this.context;

    const isOpen = isMounted && isAnyOpen();
    const baseClass = `${classPrefix}__modal-container`

    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: `
          .${baseClass} {
            transform: translateZ(0);
            transition: all 200ms ease;
            visibility: hidden;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            position: fixed;
            background-color: rgba(0, 0, 0, .75);
            color: ${isOpen ? 'white' : 'unset'};
            opacity: ${isOpen ? '1' : '0'};
            visibility: ${isOpen ? 'visible' : 'hidden'};
            z-index: ${isOpen ? '39' : '-1'};

            > * {
              transition: 200ms ease;
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              opacity: ${isOpen ? '1' : '0'};
              visibility: ${isOpen ? 'visible' : 'hidden'};
            }
          }
        `}} />
        <div id={baseClass} />
      </Fragment>
    );
  }
}

ModalContainer.contextType = ModalContext;

export default ModalContainer;
