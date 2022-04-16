import React from 'react';
import asModal from '../asModal';
import { IModalContext } from '../ModalContext/types';

type ChildFunction = (propsWithContext: Partial<IModalContext>) => React.ReactNode; // eslint-disable-line no-unused-vars

type NodeOrFunction = React.ReactNode | ChildFunction

const Modal: React.FC<{
  children?: NodeOrFunction
}> = (props): NodeOrFunction => {
  const { children } = props;
  if (children) {
    if (typeof children === 'function') return children({ ...props } as Omit<IModalContext, 'children'>);
    return children;
  }
  return null;
};

export default asModal(Modal);
