'use client'
import { useContext } from 'react';
import ModalContext, { IModalContext } from '../ModalProvider/context.js';

const useModal = (): IModalContext => useContext(ModalContext);

export default useModal;
