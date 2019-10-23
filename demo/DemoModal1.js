import React from 'react';
import PropTypes from 'prop-types';
import { asModal, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const DemoModal = (props) => {
  const {
    modal: {
      toggle,
      closeAll,
    },
  } = props;

  return (
    <div>
      <h2>Demo Modal 1</h2>
      <span>
        <ModalToggler slug="demo1">
          <a>Click here to close with the ModalToggler component</a>
        </ModalToggler>

        <p>
          <button
            onClick={() => toggle('demo1')}
            type="button"
          >
            <a>
              Click here to close with the toggle method
            </a>
          </button>
        </p>

        <p>
          or even this:
          <button
            onClick={() => closeAll()}
            type="button"
          >
            <a>
            Click here to close with the closeAll method
            </a>
          </button>
        </p>

        <p>
          or press:
          &nbsp;
          <b><kbd>esc</kbd></b>
          &nbsp;
          on your keyboard
        </p>
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

export default asModal(DemoModal);
