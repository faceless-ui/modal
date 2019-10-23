import React from 'react';
import PropTypes from 'prop-types';
import { asModal, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const DemoModal = (props) => {
  const { toggleModal, closeAllModals } = props;

  return (
    <div>
      <h2>Demo Modal 1</h2>
      <span>
        <ModalToggler slug="demo1">
          <a>Click here to close with the ModalToggler component</a>
        </ModalToggler>

        <p>
          <button
            onClick={() => toggleModal('demo1')}
            type="button"
          >
            <a>
              Click here to close with the toggleModal method
            </a>
          </button>
        </p>

        <p>
          or even this:
          <button
            onClick={() => closeAllModals()}
            type="button"
          >
            <a>
            Click here to close with the closeAllModals method
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
  toggleModal: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
};

export default asModal(DemoModal);
