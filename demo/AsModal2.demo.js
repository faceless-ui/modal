import React from 'react';
import { asModal } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const AsModal2 = () => (
  <div
    style={{
      background: 'rgba(0, 0, 0, .75)',
      color: 'white',
      height: '400px',
      overflow: 'auto',
    }}
  >
    <h2>asModal Demo 2</h2>
    <span>
      <p>
        press
        &nbsp;
        <b>
          <kbd>esc</kbd>
        </b>
        &nbsp;
        on your keyboard
      </p>
      <p>
        or click outside this modal
      </p>
      <p>
        This content can scroll, though the underlying body cannot.
      </p>
    </span>
    <div style={{ height: '800px' }} />
  </div>
);

export default asModal(AsModal2);
