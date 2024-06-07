import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer'

export type Settings = Record<string, unknown>;

export type ChildFunction = (settings: ISettings) => React.ReactNode; // eslint-disable-line no-unused-vars

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
  children?: React.ReactNode | ChildFunction
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


  if (children) {
    if (typeof children === 'function') {
      return (
        <SettingsContext.Provider value={context}>
          {children(context)}
        </SettingsContext.Provider>
      )
    }

    return (
      <SettingsContext.Provider value={context}>
        {children}
      </SettingsContext.Provider>
    )
  }
  return null;
}
