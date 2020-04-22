import React from 'react';
import PropTypes from 'prop-types';
import { asModal, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const AsModal1 = (props) => {
  const {
    modal: {
      toggle,
      closeAll,
    },
  } = props;

  return (
    <div style={{ background: 'rgba(0, 0, 0, .75)', color: 'white' }}>
      <h2>asModal Demo 1</h2>
      <span>
        <ModalToggler slug="modal1">
          Click here to close with the ModalToggler component
        </ModalToggler>
        <div>
          <button
            onClick={() => toggle('modal1')}
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
        <p>
          or press:
          &nbsp;
          <b><kbd>esc</kbd></b>
          &nbsp;
          on your keyboard
        </p>
        <p>
          or click outside this modal
        </p>
      </span>
    </div>
  );
};

AsModal1.propTypes = {
  modal: PropTypes.shape({
    toggle: PropTypes.func,
    closeAll: PropTypes.func,
  }).isRequired,
};

export default asModal(AsModal1, 'modal1');
