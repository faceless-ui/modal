'use client'
import { useContext } from 'react';
import { ModalContext, IModalContext } from '../ModalProvider/context.js';

export const useModal = (): IModalContext => useContext(ModalContext);
