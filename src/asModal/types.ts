import React, { CSSProperties, ElementType } from 'react';

export type Props = {
  slug: string,
  closeOnBlur?: boolean,
  lockBodyScroll?: boolean,
  // autoFocus?: boolean,
  // trapFocus?: boolean,
  // returnFocus?: boolean,
  id?: string,
  className?: string,
  style?: CSSProperties,
  htmlElement?: ElementType,
  htmlAttributes?: {
    [key: string]: unknown
  },
  classPrefix?: string
}

export interface IAsModal {
  ModalComponent: React.Component,
  slugFromArg: string
}
