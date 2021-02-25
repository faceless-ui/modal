import { createContext } from 'react';
import { IModalContext } from './types';

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export default ModalContext;
