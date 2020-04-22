import React from 'react';
import { Modal } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const Modal1 = () => (
  <Modal
    slug="modal3"
    closeOnBlur={false}
    lockBodyScroll={false}
  >
    {(modal) => {
      const { toggle } = modal;
      return (
        <div style={{ background: 'rgba(0, 0, 0, .75)', color: 'white' }}>
          <h2>Modal Demo 1</h2>
          <span>
            <button
              onClick={() => toggle('modal3')}
              type="button"
            >
              Click here to close with the toggle method
            </button>
            <p>
              press
              &nbsp;
              <b>
                <kbd>esc</kbd>
              </b>
              &nbsp;
              on your keyboard
            </p>
            <p>
              But clicking outside this modal does nothing.
            </p>
            <p>
              And scrolling will cause the underlying body to also scroll.
            </p>
          </span>
        </div>
      );
    }}
  </Modal>
);

export default Modal1;
