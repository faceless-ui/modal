import React, { Fragment } from 'react';
import { useModal } from '../../src';
import { useSettings } from '../SettingsProvider';

const SettingsControls: React.FC = () => {
  const { dispatchSettings } = useSettings();

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
          onChange={(e) => {
            dispatchSettings({
              payload: {
                handleParamChange: Boolean(e.target.value === 'true'),
              },
            });
          }}
          value={Boolean(!handleParamChange).toString() || ''}
          checked={Boolean(handleParamChange)}
        />
      </label>
      <br />
      <label htmlFor="classPrefix">
        <code>classPrefix:&nbsp;</code>
        <input
          type="text"
          id="classPrefix"
          onChange={(e) => {
            dispatchSettings({
              payload: {
                classPrefix: e.target.value,
              },
            });
          }}
          value={classPrefix}
        />
      </label>
      <br />
      <label htmlFor="transTime">
        <code>transTime:&nbsp;</code>
        <input
          type="number"
          id="transTime"
          onChange={(e) => {
            const value = e.target.valueAsNumber;
            dispatchSettings({
              payload: {
                transTime: !isNaN(value) ? value : 0,
              },
            });
          }}
          value={transTime || 0}
        />
      </label>
      <br />
      <label htmlFor="generateCSS">
        <code>generateCSS:&nbsp;</code>
        <input
          type="checkbox"
          id="generateCSS"
          onChange={(e) => {
            dispatchSettings({
              payload: {
                generateCSS: Boolean(e.target.value === 'true'),
              },
            });
          }}
          value={Boolean(!generateCSS).toString() || ''}
          checked={generateCSS}
        />
      </label>
      <br />
      <label htmlFor="minifyCSS">
        <code>minifyCSS:&nbsp;</code>
        <input
          type="checkbox"
          id="minifyCSS"
          onChange={(e) => {
            dispatchSettings({
              payload: {
                minifyCSS: Boolean(e.target.value === 'true'),
              },
            });
          }}
          value={Boolean(!minifyCSS).toString() || ''}
          checked={minifyCSS}
        />
      </label>
      <br />
      <label htmlFor="zIndex">
        <code>zIndex:&nbsp;</code>
        <input
          type="number"
          id="zIndex"
          onChange={(e) => {
            const value = e.target.valueAsNumber;
            dispatchSettings({
              payload: {
                zIndex: !isNaN(value) ? value : 0,
              },
            });
          }}
          value={zIndex || 0}
        />
      </label>
    </Fragment>
  );
};

export default SettingsControls;
