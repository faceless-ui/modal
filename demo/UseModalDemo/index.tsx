import React from 'react';
import { useModal } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from '../LogProps';

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
