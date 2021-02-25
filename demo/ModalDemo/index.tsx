import React, { Fragment, useReducer } from 'react';
import { Modal } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from '../LogProps';
import ModalControls from '../ModalControls';
import reducer from './reducer';

const initialSettings = {};

const ModalDemo: React.FC = () => {
  const [settings, dispatchSettings] = useReducer(reducer, initialSettings);

  return (
    <Modal
      slug="Modal"
      {...settings}
    >
      {(modal) => {
        const propsToPrint = { ...modal };
        delete propsToPrint.children;

        return (
          <Fragment>
            <ModalControls
              {...modal}
              dispatchSettings={dispatchSettings}
            />
            <LogProps {...propsToPrint} />
          </Fragment>
        );
      }}
    </Modal>
  );
};

export default ModalDemo;
