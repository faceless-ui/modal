import React from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to test production
import DemoModal from './DemoModal';

const App = () => {
  return (
    <ModalProvider classPrefix="custom">
      <h1>React Modal - Demo</h1>
      <ModalToggler slug="demo">
        <a>Click to open the modal</a>
      </ModalToggler>
      <DemoModal slug="demo" />
      <ModalContainer />
    </ModalProvider>
  )
}

export default App;
