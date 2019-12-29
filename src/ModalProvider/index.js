import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';
import minifyCssString from 'minify-css-string';
import ModalContext from './context';
import defaultClassPrefix from '../defaultClassPrefix';
import generateCSS from './css';

class ModalProvider extends Component {
  constructor() {
    super();
    this.state = {
      containerNode: undefined,
      currentModal: '',
      oneIsOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => this.bindEsc(e), false);
    window.addEventListener('popstate', () => this.resetInternalState());
    this.resetInternalState();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (e) => this.bindEsc(e), false);
  }

  closeAll = (updateHistory = true) => {
    const { handleParamChange } = this.props;

    if (updateHistory) {
      if (typeof handleParamChange === 'function') {
        handleParamChange({ key: 'modal', value: '' });
      } else {
        const searchQuery = this.getSearchQuery();
        delete searchQuery.modal;
        const queryWithoutModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
        const newURL = `${window.location.pathname}${queryWithoutModal}`;
        window.history.pushState({}, '', newURL);
      }
    }

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
      } else {
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

  setContainerNode = (node) => {
    this.setState({ containerNode: node });
  }

  bindEsc = (e) => {
    if (e.keyCode === 27) {
      this.closeAll();
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
      zIndex,
      transTime,
    } = this.props;

    const {
      containerNode,
      oneIsOpen,
      currentModal,
    } = this.state;

    const modalContext = {
      modal: {
        containerNode,
        oneIsOpen,
        currentModal,
        closeAll: this.closeAll,
        toggle: this.toggle,
        setContainerNode: this.setContainerNode,
        classPrefix: classPrefix || defaultClassPrefix,
        transTime,
        manuallyRerender: this.resetInternalState,
      },
    };

    const cssString = generateCSS(classPrefix, zIndex);

    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: minifyCSS ? minifyCssString(cssString) : cssString }} />
        <ModalContext.Provider value={modalContext}>
          {children}
        </ModalContext.Provider>
      </Fragment>
    );
  }
}

ModalProvider.defaultProps = {
  classPrefix: '',
  minifyCSS: true,
  zIndex: 9999,
  transTime: 1000,
  handleParamChange: undefined,
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
  zIndex: PropTypes.number,
  transTime: PropTypes.number,
  handleParamChange: PropTypes.func,
};

export default ModalProvider;
