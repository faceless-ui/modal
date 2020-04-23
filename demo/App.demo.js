import React, { Fragment } from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import AsModal1 from './AsModal1.demo';
import AsModal2 from './AsModal2.demo';
import UseModal from './UseModal.demo';
import Modal1 from './Modal1.demo';

const App = () => (
  <Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .demo__modal-item {
            transition: all 250ms cubic-bezier(0, 0, 0.2, 1);
            opacity: 0;
          }

          .demo__modal-item--appear,
          .demo__modal-item--appearDone,
          .demo__modal-item--enter,
          .demo__modal-item--enterDone,
          .demo__modal-item--exit {
            opacity: 1;
          }
        `,
      }}
    />
    <ModalProvider
      transTime={250}
      handleParamChange
      classPrefix="demo"
    >
      <ModalToggler
        slug="modal1"
        className="demo-className"
        htmlAttributes={{
          onClick: () => console.count('click'), // eslint-disable-line no-console
        }}
      >
        Click to open asModal1
      </ModalToggler>
      <AsModal1 />
      <br />
      <ModalToggler slug="modal2">
        Click to open asModal2
      </ModalToggler>
      <AsModal2 slug="modal2" />
      <ModalContainer className="customAdditionalClass" />
      <UseModal />
      <br />
      <Modal1 />
      <ModalToggler slug="modal3">
        Click to open Modal1
      </ModalToggler>
      <div style={{ height: '150vh' }} />
    </ModalProvider>
  </Fragment>
);

export default App;
