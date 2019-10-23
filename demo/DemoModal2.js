import React from 'react';
import { asModal } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const DemoModal = () => {
  return (
    <div style={{ background: 'rgba(0, 0, 0, .75)', color: 'white' }}>
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
    </div>
  );
};

export default asModal(DemoModal, 'demo2');
