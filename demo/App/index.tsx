import React, { useReducer } from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import AsModal from '../AsModalDemo';
import UseModal from '../UseModalDemo';
import Modal from '../ModalDemo';
// import WithModal from './WithModal.demo';
import CSS from '../CSS';
import SettingsControls from '../SettingsControls';
import reducer from './reducer';

const defaultSettings = {
  handleParamChange: true,
  transTime: 0,
};

const App: React.FC = () => {
  const [settings, dispatchSettings] = useReducer(reducer, defaultSettings);

  return (
    <ModalProvider {...settings}>
      <CSS />
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
      <SettingsControls dispatchSettings={dispatchSettings} />
      <br />
      <UseModal />
      {/* <WithModal /> */}
      <div style={{ height: '150vh' }} />
      <ModalContainer />
    </ModalProvider>
  );
};

export default App;
