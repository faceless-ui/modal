import React from 'react';
import asModal from '../asModal';

const Modal: React.FC = (props) => {
  const { children } = props;
  if (children) {
    if (typeof children === 'function') return children({ ...props });
    return children;
  }
  return null;
};

export default asModal(Modal);
