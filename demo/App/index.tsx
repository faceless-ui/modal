import React from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import AsModal from '../AsModalDemo';
import UseModal from '../UseModalDemo';
import Modal from '../ModalDemo';
import CSS from '../CSS';
import SettingsControls from '../SettingsControls';
import { SettingsProvider } from '../SettingsProvider';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <SettingsProvider
        initialSettings={{
          handleParamChange: true,
          transTime: 250,
          zIndex: 99,
        }}
      >
        {({ settings }) => (
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
            <SettingsControls />
            <br />
            <UseModal />
            <div style={{ height: '150vh' }} />
            <ModalContainer>
              <button
                onClick={() => {
                  console.log('clicked');
                }}
                type="button"
              >
                Log to console
              </button>
            </ModalContainer>
          </ModalProvider>
        )}
      </SettingsProvider>
    </React.StrictMode>
  );
};

export default App;
