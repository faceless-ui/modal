import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useModal, ModalToggler } from '../src';

const ModalControls = (props) => {
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
        onClick={() => toggle(slug)}
        type="button"
      >
        {`toggle("${slug}")`}
      </button>
      <br />
      <button
        onClick={() => closeAll()}
        type="button"
      >
        closeAll()
      </button>
      <br />
      <button
        onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))}
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
          onChange={(e) => dispatchSettings({ closeOnBlur: Boolean(e.target.value === 'true') })}
          value={!closeOnBlur || ''}
          checked={closeOnBlur}
        />
      </label>
      <br />
      <label htmlFor="lockBodyScroll">
        <code>lockBodyScroll:&nbsp;</code>
        <input
          type="checkbox"
          id="lockBodyScroll"
          onChange={(e) => dispatchSettings({ lockBodyScroll: Boolean(e.target.value === 'true') })}
          value={!lockBodyScroll || ''}
          checked={lockBodyScroll}
        />
      </label>
    </Fragment>
  );
};

ModalControls.defaultProps = {
  slug: '',
};

ModalControls.propTypes = {
  slug: PropTypes.string,
  dispatchSettings: PropTypes.func.isRequired,
  lockBodyScroll: PropTypes.bool.isRequired,
};

export default ModalControls;
