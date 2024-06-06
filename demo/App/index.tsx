import React from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../../src/index.js'; // swap '../src' for '../dist/build.bundle' to demo production build
import AsModal from '../AsModalDemo/index.js';
import UseModal from '../UseModalDemo/index.js';
import Modal from '../ModalDemo/index.js';
import CSS from '../CSS.js';
import SettingsControls from '../SettingsControls/index.js';
import { SettingsProvider } from '../SettingsProvider/index.js';
// import Test from '../Test';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      {/* <ModalProvider>
        <div
          style={{
            backgroundColor: 'lightgray',
            height: '200px'
          }}
        />
        <Test />
        <div
          style={{
            backgroundColor: 'lightgray',
            height: '20000px'
          }}
        />
        <ModalContainer />
      </ModalProvider> */}
      <SettingsProvider
        initialSettings={{
          handleParamChange: true,
          transTime: 250,
          zIndex: 99,
        }}
      >
        {({ settings }) => (
          <ModalProvider {...settings}>
            <div
              style={{
                backgroundColor: 'lightgray',
                height: '200px'
              }}
            />
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
            <div
              style={{
                backgroundColor: 'lightgray',
                height: '10000px'
              }}
            />
          </ModalProvider>
        )}
      </SettingsProvider>
    </React.StrictMode>
  );
};

export default App;
