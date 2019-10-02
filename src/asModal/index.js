import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalContext from '../ModalProvider/context';

const asModal = (ModalComponent) => {
  class ModalWrap extends Component {
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
      const { slug } = this.props;
      const { isMounted } = this.state;
      const { isSlugOpen, closeAllModals } = this.context;
      const isOpen = isSlugOpen(slug);

      if (isMounted) {
        const modalContainer = document.getElementById('modal-container');
        return ReactDOM.createPortal(
          <ModalComponent {...this.props} isOpen={isOpen} closeAllModals={closeAllModals} />,
          modalContainer,
        );
      }
      return null;
    }
  }

  ModalWrap.contextType = ModalContext;

  ModalWrap.propTypes = {
    slug: PropTypes.string.isRequired,
  };

  return ModalWrap;
};

export default asModal;
