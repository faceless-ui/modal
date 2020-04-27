import React, { Fragment, useReducer } from 'react';
import { Modal } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import PropBlock from './PropBlock';
import ModalControls from './ModalControls.demo';

const reducer = (state, action) => ({
  ...state,
  ...action,
});

const initialSettings = {};

const ModalDemo = () => {
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
            <PropBlock {...propsToPrint} />
          </Fragment>
        );
      }}
    </Modal>
  );
};

export default ModalDemo;
