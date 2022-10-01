import React from 'react';
import LogProps from '../LogProps';
import { asModal, ModalToggler } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import ModalControls from '../ModalControls';
import { SettingsProvider } from '../SettingsProvider';

const AsModal = asModal((props) => {
  return (
    <div style={{ minHeight: '600px' }}>
      <ModalControls {...props} />
      <div>
        <ModalToggler slug="Modal">
          Open other modal
        </ModalToggler>
      </div>
      <LogProps {...props} />
    </div>
  );
});

const AsModalController: React.FC = () => {
  return (
    <SettingsProvider>
      {({ settings }) => (
        <AsModal
          {...settings}
          openOnInit
          slug="asModal"
          style={{
            height: '400px',
            overflow: 'auto',
          }}
          closeOnBlur={false}
        />
      )}
    </SettingsProvider>
  );
};

export default AsModalController;
