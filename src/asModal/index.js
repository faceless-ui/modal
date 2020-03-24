import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import withModal from '../withModal';
import itemBaseClass from './baseClass';
import generateTransitionClasses from '../ModalProvider/generateTransitionClasses';

const asModal = (ModalComponent, slugFromArg) => {
  const ModalWrap = (props) => {
    const {
      modal: {
        currentModal,
        classPrefix,
        containerNode,
        transTime,
      },
      slug: slugFromProp,
    } = props;

    if (containerNode) {
      const baseClass = `${classPrefix}__${itemBaseClass}`;
      const slug = slugFromArg || slugFromProp;

      const classes = [
        baseClass,
        `${baseClass}--slug-${slug}`,
      ].filter(Boolean).join(' ');

      return ReactDOM.createPortal(
        <CSSTransition
          timeout={transTime}
          in={currentModal === slug}
          classNames={generateTransitionClasses(baseClass)}
          appear
        >
          <div className={classes}>
            <ModalComponent
              {...props}
              isOpen={currentModal === slug}
            />
          </div>
        </CSSTransition>,
        containerNode,
      );
    }
    return null;
  };

  ModalWrap.defaultProps = {
    slug: '',
  };

  ModalWrap.propTypes = {
    slug: PropTypes.string,
  };

  return withModal(ModalWrap);
};

export default asModal;
