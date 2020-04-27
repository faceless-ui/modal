import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useModal } from '../src';

const ProviderControls = (props) => {
  const { dispatchSettings } = props;

  const {
    transTime,
    classPrefix,
    handleParamChange,
    generateCSS,
    minifyCSS,
    zIndex,
  } = useModal();

  return (
    <Fragment>
      <label htmlFor="handleParamChange">
        <code>handleParamChange:&nbsp;</code>
        <input
          type="checkbox"
          id="handleParamChange"
          onChange={(e) => dispatchSettings({ handleParamChange: Boolean(e.target.value === 'true') })}
          value={!handleParamChange || ''}
          checked={handleParamChange}
        />
      </label>
      <br />
      <label htmlFor="classPrefix">
        <code>classPrefix:&nbsp;</code>
        <input
          type="text"
          id="classPrefix"
          onChange={(e) => dispatchSettings({ classPrefix: e.target.value })}
          value={classPrefix}
        />
      </label>
      <br />
      <label htmlFor="transTime">
        <code>transTime:&nbsp;</code>
        <input
          type="number"
          id="transTime"
          onChange={(e) => dispatchSettings({ transTime: e.target.valueAsNumber })}
          value={transTime}
        />
      </label>
      <br />
      <label htmlFor="generateCSS">
        <code>generateCSS:&nbsp;</code>
        <input
          type="checkbox"
          id="generateCSS"
          onChange={(e) => dispatchSettings({ generateCSS: Boolean(e.target.value === 'true') })}
          value={!generateCSS || ''}
          checked={generateCSS}
        />
      </label>
      <br />
      <label htmlFor="minifyCSS">
        <code>minifyCSS:&nbsp;</code>
        <input
          type="checkbox"
          id="minifyCSS"
          onChange={(e) => dispatchSettings({ minifyCSS: Boolean(e.target.value === 'true') })}
          value={!minifyCSS || ''}
          checked={minifyCSS}
        />
      </label>
      <br />
      <label htmlFor="zIndex">
        <code>zIndex:&nbsp;</code>
        <input
          type="number"
          id="zIndex"
          onChange={(e) => dispatchSettings({ zIndex: e.target.valueAsNumber })}
          value={zIndex}
        />
      </label>
    </Fragment>
  );
};

ProviderControls.propTypes = {
  dispatchSettings: PropTypes.func.isRequired,
};

export default ProviderControls;
