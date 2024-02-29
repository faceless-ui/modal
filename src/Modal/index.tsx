'use client'
import * as focusTrap from 'focus-trap';
import React, { Fragment, ElementType, HTMLProps } from 'react';
import asModal from '../asModal';
import { IModalContext } from '../ModalProvider/context';

export type ModalPropsWithContext = ModalProps & {
  modal?: IModalContext
};

export type ChildFunction = (propsWithContext: ModalPropsWithContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export interface ModalProps extends Omit<HTMLProps<HTMLElement>, 'children'> {
  slug: string
  closeOnBlur?: boolean
  lockBodyScroll?: boolean
  htmlElement?: ElementType
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
  children?: React.ReactNode | ChildFunction
  trapFocus?: boolean
  focusTrapOptions?: focusTrap.Options
}

const Modal: React.FC<ModalPropsWithContext & {
  children?: React.ReactNode | ChildFunction
}> = (props) => {
  const { children } = props;

  if (children) {
    if (typeof children === 'function') {
      return (
        <Fragment>
          {children(props)}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
  return null;
};

export default asModal(Modal);
