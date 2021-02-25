import React, { Fragment } from 'react';
import { useModal, ModalToggler } from '../../src';
import { Props as AsModalProps } from '../../src/asModal/types';
import { Props as AppProps } from '../App/types';

const ModalControls: React.FC<AsModalProps & AppProps> = (props) => {
  const {
    dispatchSettings,
    slug,
    lockBodyScroll,
  } = props;

  const {
    closeOnBlur,
    closeAll,
    toggle,
  } = useModal();

  return (
    <Fragment>
      <ModalToggler slug={slug}>
        {`<ModalToggler slug="${slug}" />`}
      </ModalToggler>
      <br />
      <button
        onClick={() => { toggle(slug); }}
        type="button"
      >
        {`toggle("${slug}")`}
      </button>
      <br />
      <button
        onClick={() => { closeAll(); }}
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
