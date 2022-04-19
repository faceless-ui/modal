import React, { useReducer } from 'react';
import LogProps from '../LogProps';
import { asModal } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import ModalControls from '../ModalControls';
import reducer from './reducer';
import { ModalProps } from '../../src/Modal';
import { Props as AppProps } from '../App/types';

const AsModal = asModal<ModalProps & AppProps>((props) => {
  const propsToPrint = { ...props };
  delete propsToPrint.dispatchSettings;

  return (
    <div style={{ minHeight: '600px' }}>
      <ModalControls {...props} />
      <LogProps {...propsToPrint} />
    </div>
  );
});

const initialSettings = {};

const AsModalController: React.FC = () => {
  const [settings, dispatchSettings] = useReducer(reducer, initialSettings);

  return (
    <AsModal
      {...settings}
      slug="asModal"
      dispatchSettings={dispatchSettings}
      style={{
        height: '400px',
        overflow: 'auto',
      }}
    />
  );
};

export default AsModalController;
