import React, { useReducer } from 'react';
import LogProps from './LogProps';
import { asModal } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import ModalControls from './ModalControls.demo';

const AsModal = asModal((props) => {
  const propsToPrint = { ...props };
  delete propsToPrint.dispatchSettings;

  return (
    <div style={{ minHeight: '600px' }}>
      <ModalControls {...props} />
      <LogProps {...propsToPrint} />
    </div>
  );
});

const reducer = (state, action) => ({
  ...state,
  ...action,
});

const initialSettings = {};

const AsModalController = () => {
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
