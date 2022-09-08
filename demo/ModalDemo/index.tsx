import React, { Fragment } from 'react';
import { Modal } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from '../LogProps';
import ModalControls from '../ModalControls';
import { SettingsProvider } from '../SettingsProvider';

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
