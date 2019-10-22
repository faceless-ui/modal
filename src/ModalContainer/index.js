import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import minifyCssString from 'minify-css-string';
import withModalContext from '../withModalContext';
import generateCSS from './css';

class ModalContainer extends Component {
  componentDidMount() {
    const { setContainerStatus } = this.props;
    setContainerStatus(true);
  }

  componentWillUnmount() {
    const { setContainerStatus } = this.props;
    setContainerStatus(false);
  }

  render() {
    const {
      oneIsOpen,
      classPrefix,
      minifyCSS,
    } = this.props;

    const baseClass = `${classPrefix}__modal-container`;
    const classes = [
      baseClass,
      oneIsOpen && `${baseClass}--is-open`,
    ].filter(Boolean).join(' ');

    const cssString = generateCSS(baseClass);

    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: minifyCSS ? minifyCssString(cssString) : cssString }} />
        <div
          id={baseClass}
          className={classes}
        />
      </Fragment>
    );
  }
}

ModalContainer.propTypes = {
  oneIsOpen: PropTypes.bool.isRequired,
  classPrefix: PropTypes.string.isRequired,
  minifyCSS: PropTypes.bool.isRequired,
  setContainerStatus: PropTypes.func.isRequired,
};

export default withModalContext(ModalContainer);
