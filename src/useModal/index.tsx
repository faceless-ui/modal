import { useContext } from 'react';
import ModalContext from '../ModalContext';
import { IModalContext } from '../ModalContext';

const useModal = (): IModalContext => useContext(ModalContext);

export default useModal;
