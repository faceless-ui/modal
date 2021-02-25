import React, { Fragment } from 'react';
import { useModal } from '../../src';
import { Props } from '../App/types';

const SettingsControls: React.FC<Props> = (props) => {
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
            dispatchSettings({
              payload: {
                transTime: e.target.valueAsNumber,
              },
            });
          }}
          value={transTime}
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
            dispatchSettings({
              payload: {
                zIndex: e.target.valueAsNumber,
              },
            });
          }}
          value={zIndex}
        />
      </label>
    </Fragment>
  );
};

export default SettingsControls;
