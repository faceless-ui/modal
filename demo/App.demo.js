import React, { useReducer } from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import AsModal from './AsModal.demo';
import UseModal from './UseModal.demo';
import Modal from './Modal.demo';
// import WithModal from './WithModal.demo';
import Transitions from './Transitions.demo';
import ProviderControls from './ProviderControls.demo';

const reducer = (state, action) => ({
  ...state,
  ...action,
});

const defaultSettings = {
  handleParamChange: true,
  transTime: 0,
};

const App = () => {
  const [settings, dispatchSettings] = useReducer(reducer, defaultSettings);

  return (
    <ModalProvider {...settings}>
      <Transitions />
      <AsModal />
      <Modal />
      <ModalToggler slug="asModal">
        {'<AsModal />'}
      </ModalToggler>
      <br />
      <ModalToggler slug="Modal">
        {'<Modal />'}
      </ModalToggler>
      <br />
      <br />
      <ProviderControls dispatchSettings={dispatchSettings} />
      <br />
      <UseModal />
      {/* <WithModal /> */}
      <div style={{ height: '150vh' }} />
      <ModalContainer />
    </ModalProvider>
  );
};

export default App;
