import React, { Fragment } from 'react';
import { Modal, ModalToggler } from '../../src/index.js'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from '../LogProps/index.js';
import ModalControls from '../ModalControls/index.js';
import { SettingsProvider } from '../SettingsProvider/index.js';

const ModalDemo: React.FC = () => {

  return (
    <SettingsProvider
      initialSettings={{}}
    >
      {({ settings }) => (
        <Modal
          slug="Modal"
          {...settings}
          closeOnBlur={false}
        >
          {(modal) => {
            const propsToPrint = { ...modal };
            delete propsToPrint.children;

            return (
              <Fragment>
                <ModalControls {...modal} />
                <div>
                  <ModalToggler slug="asModal">
                    Open other modal
                  </ModalToggler>
                </div>
                <LogProps {...propsToPrint} />
              </Fragment>
            );
          }}
        </Modal>
      )}
    </SettingsProvider>
  );
};

export default ModalDemo;
