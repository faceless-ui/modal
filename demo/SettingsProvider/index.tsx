import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

export type Settings = Record<string, unknown>;

export interface IReducerAction {
  payload: Record<string, unknown>
}

export type ISettings = {
  settings: Settings
  dispatchSettings: (args: IReducerAction) => void, // eslint-disable-line no-unused-vars
}

export const SettingsContext = createContext<ISettings>({} as ISettings);

export const useSettings = (): ISettings => useContext(SettingsContext);

export const SettingsProvider: React.FC<{
  children?: (settings: Settings) => React.ReactNode // eslint-disable-line no-unused-vars
  initialSettings?: Settings
}> = (props) => {
  const {
    children,
    initialSettings = {}
  } = props;
  const [settings, dispatchSettings] = useReducer(reducer, initialSettings);

  const context: ISettings = {
    settings,
    dispatchSettings,
  };

  return (
    <SettingsContext.Provider
      value={context}
    >
      {typeof children === 'function' ? children(context) : null}
    </SettingsContext.Provider>
  )
}
