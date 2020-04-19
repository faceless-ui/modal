import React, { Fragment } from 'react';
import { Modal, ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import AsModal1 from './AsModal1.demo';
import AsModal2 from './AsModal2.demo';
import UseModal from './UseModal.demo';

const App = () => (
  <Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .demo__modal-item {
            transition: all 0ms cubic-bezier(0, 0, 0.2, 1);
            opacity: 0;
          }

          .demo__modal-item--will-open,
          .demo__modal-item--is-open {
            opacity: 1;
          }
        `,
      }}
    />
    <ModalProvider
      classPrefix="demo"
      transTime={250}
    >
      <ModalToggler
        slug="demo1"
        className="demo-className"
        htmlAttributes={{
          onClick: () => console.count('click'), // eslint-disable-line no-console
        }}
      >
        Click to open demo 1
      </ModalToggler>
      <AsModal1 />
      <ModalToggler slug="demo2">
        Click to open demo 2
      </ModalToggler>
      <AsModal2 slug="demo2" />
      <ModalContainer className="customAdditionalClass" />
      <UseModal />
      <Modal slug="demo3">
        {(modal) => {
          const { toggle } = modal;
          return (
            <div style={{ background: 'rgba(0, 0, 0, .75)', color: 'white' }}>
              <h2>Demo Modal 3</h2>
              <span>
                <button
                  onClick={() => toggle('demo3')}
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
              </span>
            </div>
          );
        }}
      </Modal>
      <ModalToggler slug="demo3">
        Click to open demo 3
      </ModalToggler>
    </ModalProvider>
  </Fragment>
);

export default App;
