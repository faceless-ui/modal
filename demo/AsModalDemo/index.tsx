import React from 'react';
import LogProps from '../LogProps/index.js';
import { asModal, ModalToggler } from '@faceless-ui/modal';
import ModalControls from '../ModalControls/index.js';
import { SettingsProvider } from '../SettingsProvider/index.js';

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
