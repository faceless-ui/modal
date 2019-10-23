import React from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to test production
import DemoModal1 from './DemoModal1';
import DemoModal2 from './DemoModal2';

const App = () => {
  return (
    <ModalProvider
      classPrefix="custom"
      transTime={2000}
      transCurve="cubic-bezier(0, 0, 0.2, 1)"
      backgroundColor="white"
    >
      <h1>React Modal</h1>

      <h2>Demo 1</h2>
      <ModalToggler
        slug="demo1"
        className="abcdefg"
      >
        <a>Click to open demo 1</a>
      </ModalToggler>
      <DemoModal1 />

      <h2>Demo 2</h2>
      <ModalToggler slug="demo2">
        <a>Click to open demo 2</a>
      </ModalToggler>
      <DemoModal2 />

      <ModalContainer className="hijklmnop" />
    </ModalProvider>
  );
};

export default App;
