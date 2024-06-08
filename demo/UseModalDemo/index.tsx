import React from 'react';
import { useModal } from '@faceless-ui/modal';
import LogProps from '../LogProps/index.js';

const UseModal: React.FC = (props) => {
  const modal = useModal();
  return (
    <LogProps
      {...{
        ...modal,
        ...props
      }}
    />
  );
};

export default UseModal;
