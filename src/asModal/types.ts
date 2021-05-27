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
  classPrefix?: string,
  onOpen?: () => void,
  onClose?: () => void,
  onEnter?: () => void,
  onEntered?: () => void,
  onEntering?: () => void,
  onExit?: () => void,
  onExiting?: () => void,
  onExited?: () => void,
  openOnInit?: boolean
}

export interface IAsModal {
  ModalComponent: React.Component,
  slugFromArg: string
}
