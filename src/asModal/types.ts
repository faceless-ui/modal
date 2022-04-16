import React, { CSSProperties, ElementType } from 'react';
import { IModalContext } from '../ModalContext/types';

export type Props = {
  slug: string
  closeOnBlur?: boolean
  lockBodyScroll?: boolean
  // autoFocus?: boolean,
  // trapFocus?: boolean,
  // returnFocus?: boolean,
  id?: string
  className?: string
  style?: CSSProperties
  htmlElement?: ElementType
  htmlAttributes?: {
    [key: string]: unknown
  },
  classPrefix?: string
  onOpen?: () => void
  onClose?: () => void
  onEnter?: () => void
  onEntered?: () => void
  onEntering?: () => void
  onExit?: () => void
  onExiting?: () => void
  onExited?: () => void
  openOnInit?: boolean
  children?: React.ReactNode | ((propsWithContext: Partial<IModalContext>) => React.ReactNode); //eslint-disable-line no-unused-vars
}

export interface IAsModal {
  ModalComponent: React.ReactNode
  slugFromArg: string
}
