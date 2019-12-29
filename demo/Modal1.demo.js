import React from 'react';
import PropTypes from 'prop-types';
import { asModal, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const DemoModal = (props) => {
  const {
    modal: {
      toggle,
      closeAll,
    },
  } = props;

  return (
    <div style={{ background: 'rgba(0, 0, 0, .75)', color: 'white' }}>
      <h2>Demo Modal 1</h2>
      <span>
        <ModalToggler slug="demo1">
          Click here to close with the ModalToggler component
        </ModalToggler>
        <div>
          <button
            onClick={() => toggle('demo1')}
            type="button"
          >
            Click here to close with the toggle method
          </button>
        </div>
        <div>
          <button
            onClick={() => closeAll()}
            type="button"
          >
            Click here to close with the closeAll method
          </button>
        </div>
        <div>
          or press:
          &nbsp;
          <b><kbd>esc</kbd></b>
          &nbsp;
          on your keyboard
        </div>
      </span>
    </div>
  );
};

DemoModal.propTypes = {
  modal: PropTypes.shape({
    toggle: PropTypes.func,
    closeAll: PropTypes.func,
  }).isRequired,
};

export default asModal(DemoModal, 'demo1');
