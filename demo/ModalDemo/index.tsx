import React, { Fragment } from 'react';
import { Modal, ModalToggler } from '@faceless-ui/modal';
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
