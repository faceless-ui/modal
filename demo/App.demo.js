import React, { Fragment } from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to test production
import ModalDemo1 from './Modal1.demo';
import ModalDemo2 from './Modal2.demo';

const App = () => {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{ __html: `
          .customClassPrefix__modal-item {
            transition: all 250ms cubic-bezier(0, 0, 0.2, 1);
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
        transTime={250}
      >
        <h1>React Modal</h1>

        <ModalToggler
          slug="demo1"
          className="customAdditionalClass"
        >
          <a>Click to open demo 1</a>
        </ModalToggler>
        <ModalDemo1 />

        <ModalToggler slug="demo2">
          <a>Click to open demo 2</a>
        </ModalToggler>
        <ModalDemo2 />

        <ModalContainer className="customAdditionalClass" />
      </ModalProvider>

    </Fragment>
  );
};

export default App;
