import React from 'react';

type HTMLAttributes = {
  id?: string,
  className?: string,
  style?: Record<string, unknown>,
  onClick?: () => void,
}

export type Props = {
  slug: string,
  closeOnBlur?: boolean,
  lockBodyScroll?: boolean,
  // autoFocus?: boolean,
  // trapFocus?: boolean,
  // returnFocus?: boolean,
  id?: string,
  className?: string,
  style?: Record<string, unknown>,
  htmlElement?: string,
  htmlAttributes?: HTMLAttributes,
  classPrefix?: string
}

export interface IAsModal {
  ModalComponent: React.Component,
  slugFromArg: string
}
