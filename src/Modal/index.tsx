import React, { Fragment, CSSProperties, ElementType } from 'react';
import asModal from '../asModal';
import { IModalContext } from '../ModalContext/types';

export type ModalPropsWithContext = ModalProps & {
  modal?: IModalContext
};

export type ChildFunction = (propsWithContext: ModalPropsWithContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type ModalProps = {
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
  children?: React.ReactNode | ChildFunction
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
