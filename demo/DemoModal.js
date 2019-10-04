import React from 'react';
import { asModal, ModalToggler, ModalContext } from '../src';

const DemoModal = () => {
  return (
    <div>
      <h2>I am the demo modal</h2>
      <span>
        <ModalToggler slug="demo">
          <a>Click here to close</a>
        </ModalToggler>
        <p>or press <b><kbd>esc</kbd></b> on your keyboard</p>
        <ModalContext.Consumer>
          {(modalContext) => {
            return (
              <p>
                or press this
                <button onClick={() => modalContext.toggleModal("demo")}>
                  <a>
                    custom close button
                  </a>
                </button>
              </p>
            )
          }}
        </ModalContext.Consumer>
      </span>
    </div>
  )
}

export default asModal(DemoModal);
