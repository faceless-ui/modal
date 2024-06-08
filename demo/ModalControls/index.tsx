import React, { Fragment } from 'react';
import { useModal, ModalToggler } from '@faceless-ui/modal';
import type {ModalPropsWithContext} from '../../src/Modal';
import { useSettings } from '../SettingsProvider/index.js';

const ModalControls: React.FC<ModalPropsWithContext> = (props) => {
  const { dispatchSettings } = useSettings();

  const {
    slug,
    lockBodyScroll,
  } = props;

  const {
    closeOnBlur,
    closeAllModals,
    toggleModal,
  } = useModal();

  return (
    <Fragment>
      <ModalToggler slug={slug}>
        {`<ModalToggler slug="${slug}" />`}
      </ModalToggler>
      <br />
      <button
        onClick={() => { toggleModal(slug); }}
        type="button"
      >
        {`toggle("${slug}")`}
      </button>
      <br />
      <button
        onClick={() => { closeAllModals(); }}
        type="button"
      >
        closeAll()
      </button>
      <br />
      <button
        onClick={() => {
          document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }));
        }}
        type="button"
      >
        esc key
      </button>
      <br />
      <br />
      <label htmlFor="closeOnBlur">
        <code>closeOnBlur:&nbsp;</code>
        <input
          type="checkbox"
          id="closeOnBlur"
          onChange={(e) => {
            dispatchSettings({
              payload: {
                closeOnBlur: Boolean(e.target.value === 'true'),
              },
            });
          }}
          value={Boolean(!closeOnBlur).toString() || ''}
          checked={closeOnBlur}
        />
      </label>
      <br />
      <label htmlFor="lockBodyScroll">
        <code>lockBodyScroll:&nbsp;</code>
        <input
          type="checkbox"
          id="lockBodyScroll"
          onChange={(e) => {
            dispatchSettings({
              payload: {
                lockBodyScroll: Boolean(e.target.value === 'true'),
              },
            });
          }}
          value={Boolean(!lockBodyScroll).toString() || ''}
          checked={lockBodyScroll}
        />
      </label>
    </Fragment>
  );
};

export default ModalControls;
