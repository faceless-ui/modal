import React, { Fragment } from 'react';
import { asModal } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const DemoModal = () => {
  return (
    <Fragment>
      <h2>Demo Modal 2</h2>
      <span>
        <p>
          press
          &nbsp;
          <b><kbd>esc</kbd></b>
          &nbsp;
          on your keyboard
        </p>
      </span>
    </Fragment>
  );
};

export default asModal(DemoModal);
