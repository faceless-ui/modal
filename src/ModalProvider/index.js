import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';
import ModalContext from './context';

const canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

class ModalProvider extends Component {
  modalContextMethods = {
    closeAllModals: () => {
      const { updateTicker } = this.state;
      const query = queryString.parse(
        window.location.search,
        { ignoreQueryPrefix: true },
      );
      delete query.modal;
      const searchString = queryString.stringify(
        query,
        { addQueryPrefix: true },
      );
      window.history.pushState({}, '', `${window.location.pathname}${searchString}`);
      this.setState({ updateTicker: updateTicker + 1 });
    },
    openModal: (slug) => {
      const { updateTicker } = this.state;
      const query = queryString.parse(
        window.location.search,
        { ignoreQueryPrefix: true },
      );
      query.modal = slug;
      const searchString = queryString.stringify(
        query,
        { addQueryPrefix: true },
      );
      window.history.pushState({}, '', `${window.location.pathname}${searchString}`);
      this.setState({ updateTicker: updateTicker + 1 });
    },
    toggleModal: (slug) => {
      if (this.modalContextMethods.isSlugOpen(slug)) {
        this.modalContextMethods.closeAllModals();
      } else {
        this.modalContextMethods.openModal(slug);
      }
    },
    isAnyOpen: () => {
      if (canUseDom) {
        const query = queryString.parse(
          window.location.search,
          { ignoreQueryPrefix: true },
        );
        return Boolean(query.modal);
      }
      return null;
    },
    isSlugOpen: (slug) => {
      if (canUseDom) {
        const query = queryString.parse(
          window.location.search,
          { ignoreQueryPrefix: true },
        );
        return query.modal === slug;
      }
      return null;
    },
  };

  constructor() {
    super();
    this.state = {
      updateTicker: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', e => this.bindEsc(e), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', e => this.bindEsc(e), false);
  }

  bindEsc = (e) => {
    if (e.keyCode === 27) {
      this.modalContextMethods.closeAllModals();
    }
  };

  render() {
    const { children } = this.props;
    const modalContext = {
      ...this.modalContextMethods,
      ...this.state,
    };

    return (
      <ModalContext.Provider value={modalContext}>
        {children}
      </ModalContext.Provider>
    );
  }
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
};

export default ModalProvider;
