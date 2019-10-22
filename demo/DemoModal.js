import React from 'react';
import PropTypes from 'prop-types';
import { asModal, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const DemoModal = (props) => {
  const { toggleModal } = props;

  return (
    <div>
      <h2>I am the demo modal</h2>
      <span>
        <ModalToggler slug="demo">
          <a>Click here to close</a>
        </ModalToggler>
        <p>
          or press
          &nbsp;
          <b><kbd>esc</kbd></b>
          &nbsp;
          on your keyboard
        </p>
        <p>
          or press this
          <button
            onClick={() => toggleModal('demo')}
            type="button"
          >
            <a>
              custom close button
            </a>
          </button>
        </p>
      </span>
    </div>
  );
};

DemoModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default asModal(DemoModal);
