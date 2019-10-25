import React, { Fragment } from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to test production
import DemoModal1 from './DemoModal1';
import DemoModal2 from './DemoModal2';

const App = () => {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{ __html: `
          .customClassPrefix__modal-item {
            transition: all 2000ms cubic-bezier(0, 0, 0.2, 1);
            opacity: 0;
          }

          .customClassPrefix__modal-item--will-open,
          .customClassPrefix__modal-item--is-open {
            opacity: 1;
          }
        ` }}
      />
      <ModalProvider
        classPrefix="customClassPrefix"
        transTime={2000}
      >
        <h1>React Modal</h1>

        <h2>Demo 1</h2>
        <ModalToggler
          slug="demo1"
          className="customAdditionalClass"
        >
          <a>Click to open demo 1</a>
        </ModalToggler>
        <DemoModal1 />

        <h2>Demo 2</h2>
        <ModalToggler slug="demo2">
          <a>Click to open demo 2</a>
        </ModalToggler>
        <DemoModal2 />

        <ModalContainer className="customAdditionalClass" />
      </ModalProvider>

    </Fragment>
  );
};

export default App;
