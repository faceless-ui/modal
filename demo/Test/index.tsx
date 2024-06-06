import React, { useState } from 'react';
import { Modal, useModal } from '../../src/index.js'; // swap '../src' for '../dist/build.bundle' to demo production build

const Test: React.FC = () => {
  const [renderModal, setRenderModal] = useState(false);
  const { openModal, closeModal } = useModal();

  return (
    <div>
      <button
        onClick={() => {
          openModal('test');
          setRenderModal(true);
        }}
        type="button"
      >
        Render modal
      </button>
      {renderModal && (
        <Modal slug="test">
          Hello, world!
          <button
            onClick={() => {
              closeModal('test');
              setRenderModal(false);
            }}
            type="button"
          >
            Close modal
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Test;
