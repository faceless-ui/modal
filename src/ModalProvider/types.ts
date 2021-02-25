export interface IHandleParamChangeCallback {
  key: string,
  value: string
}

export type Props = {
  generateCSS?: boolean,
  minifyCSS?: boolean,
  classPrefix?: string | boolean,
  handleParamChange?: (callbackArgs: IHandleParamChangeCallback) => void | boolean, // eslint-disable-line
  transTime?: number,
  zIndex?: number,
}
