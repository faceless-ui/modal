import { useContext } from 'react';
import ModalContext from '../ModalContext';
import { IModalContext } from '../ModalContext/types';

const useModal = (): IModalContext => useContext(ModalContext);

export default useModal;
