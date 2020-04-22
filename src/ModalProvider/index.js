import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import ModalContext from './context';
import defaultClassPrefix from '../defaultClassPrefix';
import generateCSS from './css';

class ModalProvider extends Component {
  constructor() {
    super();
    this.state = {
      containerRef: undefined,
      currentModal: '',
      oneIsOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => this.bindEsc(e), false);
    const currentModal = this.getModalParam();
    this.setState({
      currentModal,
      oneIsOpen: Boolean(currentModal),
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (e) => this.bindEsc(e), false);
  }

  closeAll = (updateHistory = true) => {
    const { handleParamChange } = this.props;

    if (updateHistory) {
      if (typeof handleParamChange === 'function') {
        handleParamChange({ key: 'modal', value: '' });
      }

      if (typeof handleParamChange === 'boolean' && handleParamChange) {
        const searchQuery = this.getSearchQuery();
        delete searchQuery.modal;
        const queryWithoutModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
        const newURL = `${window.location.pathname}${queryWithoutModal}`;
        window.history.pushState({}, '', newURL);
      }
    }

    clearAllBodyScrollLocks();

    this.setState({
      currentModal: '',
      oneIsOpen: false,
    });
  }

  open = (slug) => {
    if (slug) {
      const { handleParamChange } = this.props;

      if (typeof handleParamChange === 'function') {
        handleParamChange({ key: 'modal', value: slug });
      }

      if (typeof handleParamChange === 'boolean' && handleParamChange) {
        const searchQuery = this.getSearchQuery();
        searchQuery.modal = slug;
        const queryWithModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
        const newURL = `${window.location.pathname}${queryWithModal}`;
        window.history.pushState({}, '', newURL);
      }

      this.setState({
        currentModal: slug,
        oneIsOpen: true,
      });
    }
  }

  toggle = (slug) => {
    const { currentModal } = this.state;
    if (slug === currentModal) {
      this.closeAll();
    } else {
      this.open(slug);
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

  setContainerRef = (ref) => {
    this.setState({ containerRef: ref });
  }

  setCloseOnBlur = (status) => {
    this.setState({ closeOnBlur: status });
  }

  bindEsc = (e) => {
    if (e.keyCode === 27) {
      this.closeAll();
    }
  };

  minifyCSSString = (css) => css.replace(/\n/g, '').replace(/\s\s+/g, ' ');

  render() {
    const {
      children,
      generateCSS: shouldGenerateCSS,
      classPrefix,
      minifyCSS,
      zIndex,
      transTime,
    } = this.props;

    const {
      containerRef,
      oneIsOpen,
      currentModal,
      closeOnBlur,
    } = this.state;

    const modalContext = {
      containerRef,
      oneIsOpen,
      currentModal,
      closeAll: this.closeAll,
      closeOnBlur,
      setCloseOnBlur: this.setCloseOnBlur,
      open: this.open,
      toggle: this.toggle,
      setContainerRef: this.setContainerRef,
      classPrefix: classPrefix || defaultClassPrefix,
      transTime,
    };

    let cssString = '';

    if (shouldGenerateCSS) {
      cssString = generateCSS(classPrefix, zIndex);
      if (minifyCSS) cssString = this.minifyCSSString(cssString);
    }

    return (
      <Fragment>
        {shouldGenerateCSS && <style dangerouslySetInnerHTML={{ __html: cssString }} />}
        <ModalContext.Provider value={modalContext}>
          {children && children}
        </ModalContext.Provider>
      </Fragment>
    );
  }
}

ModalProvider.defaultProps = {
  classPrefix: '',
  generateCSS: true,
  minifyCSS: true,
  zIndex: 9999,
  transTime: 1000,
  handleParamChange: undefined,
  children: undefined,
};

ModalProvider.propTypes = {
  classPrefix: PropTypes.string,
  generateCSS: PropTypes.bool,
  minifyCSS: PropTypes.bool,
  zIndex: PropTypes.number,
  transTime: PropTypes.number,
  handleParamChange: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  children: PropTypes.node,
};

export default ModalProvider;
