import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'qs';
import minifyCssString from 'minify-css-string';
import ModalContext from './context';
import defaultClassPrefix from './defaultClassPrefix';
import generateCSS from './css';

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

  closeAll = () => {
    const searchQuery = this.getSearchQuery();
    delete searchQuery.modal;

    const queryWithoutModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
    window.history.pushState({}, '', `${window.location.pathname}${queryWithoutModal}`);

    this.setState({
      currentModal: '',
      oneIsOpen: false,
    });
  }

  open = (slug) => {
    if (slug) {
      const searchQuery = this.getSearchQuery();
      searchQuery.modal = slug;

      const queryWithModal = queryString.stringify(searchQuery, { addQueryPrefix: true });
      window.history.pushState({}, '', `${window.location.pathname}${queryWithModal}`);

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

  setContainerStatus = (status) => {
    this.setState({ containerIsMounted: status });
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
      modal: {
        containerIsMounted,
        oneIsOpen,
        currentModal,
        closeAll: this.closeAll,
        toggle: this.toggle,
        setContainerStatus: this.setContainerStatus,
        classPrefix: classPrefix || defaultClassPrefix,
      },
    };

    const cssString = generateCSS(
      classPrefix,
      transTime,
      transCurve,
      backgroundColor,
    );

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
