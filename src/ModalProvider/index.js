import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';
import ModalContext from './context';
import defaultClassPrefix from './defaultClassPrefix';

class ModalProvider extends Component {
  constructor() {
    super();
    this.state = {
      containerIsMounted: false,
      currentModal: '',
      oneIsOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.bindEsc(e), false);
    const currentModal = this.getModalParam();
    this.setState({
      currentModal,
      oneIsOpen: Boolean(currentModal),
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', e => this.bindEsc(e), false);
  }

  closeAllModals = () => {
    const searchQuery = this.getSearchQuery();
    delete searchQuery.modal;

    const queryWithoutModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
    window.history.pushState({}, '', `${window.location.pathname}${queryWithoutModal}`);

    this.setState({
      currentModal: '',
      oneIsOpen: false,
    });
  }

  openModal = (slug) => {
    const searchQuery = this.getSearchQuery();
    searchQuery.modal = slug;

    const queryWithModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
    window.history.pushState({}, '', `${window.location.pathname}${queryWithModal}`);

    this.setState({
      currentModal: slug,
      oneIsOpen: true,
    });
  }

  toggleModal = (slug) => {
    const { currentModal } = this.state;
    if (slug === currentModal) {
      this.closeAllModals();
    } else {
      this.openModal(slug);
    }
  }

  getModalParam = () => {
    const searchQuery = this.getSearchQuery();
    return searchQuery.modal || '';
  }

  getSearchQuery = () => {
    const query = queryString.parse(
      window.location.search,
      { ignoreQueryPrefix: true },
    );
    return query;
  }

  setContainerStatus = (status) => {
    this.setState({ containerIsMounted: status });
  }

  bindEsc = (e) => {
    if (e.keyCode === 27) {
      this.closeAllModals();
    }
  };

  render() {
    const {
      children,
      classPrefix,
      minifyCSS,
    } = this.props;

    const {
      containerIsMounted,
      oneIsOpen,
      currentModal,
    } = this.state;

    const modalContext = {
      containerIsMounted,
      oneIsOpen,
      currentModal,
      closeAllModals: this.closeAllModals,
      openModal: this.openModal,
      toggleModal: this.toggleModal,
      setContainerStatus: this.setContainerStatus,
      classPrefix: classPrefix || defaultClassPrefix,
      minifyCSS,
    };

    return (
      <ModalContext.Provider value={modalContext}>
        {children}
      </ModalContext.Provider>
    );
  }
}

ModalProvider.defaultProps = {
  classPrefix: '',
  minifyCSS: true,
};

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  classPrefix: PropTypes.string,
  minifyCSS: PropTypes.bool,
};

export default ModalProvider;
