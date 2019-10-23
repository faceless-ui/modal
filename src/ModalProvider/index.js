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
    window.addEventListener('popstate', () => this.resetInternalState());
    this.resetInternalState();
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

  resetInternalState = () => {
    const currentModal = this.getModalParam();
    this.setState({
      currentModal,
      oneIsOpen: Boolean(currentModal),
    });
  }

  render() {
    const {
      children,
      classPrefix,
      minifyCSS,
      transTime,
      transCurve,
      backgroundColor,
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
      transTime,
      transCurve,
      backgroundColor,
    };

    return (
      <ModalContext.Provider value={modalContext}>
        {children}
      </ModalContext.Provider>
    );
  }
}

ModalProvider.defaultProps = {
  transTime: 200,
  transCurve: 'linear',
  classPrefix: '',
  minifyCSS: true,
  backgroundColor: 'rgba(0, 0, 0, .75)',
};

ModalProvider.propTypes = {
  transTime: PropTypes.number,
  transCurve: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  classPrefix: PropTypes.string,
  minifyCSS: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default ModalProvider;
