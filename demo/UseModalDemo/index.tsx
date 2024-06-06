import React from 'react';
import { useModal } from '../../src/index.js'; // swap '../src' for '../dist/build.bundle' to demo production build
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
