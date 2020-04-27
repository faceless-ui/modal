import React from 'react';
import { useModal } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import PropBlock from './PropBlock';

const UseModal = (props) => {
  const modal = useModal();
  return <PropBlock {...{ ...modal, ...props }} />;
};

export default UseModal;
