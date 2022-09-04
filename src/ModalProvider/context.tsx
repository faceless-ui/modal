import { createContext } from 'react';
import { ModalProviderProps } from '../ModalProvider';

export interface IModalContext extends ModalProviderProps {
  transTime: number,
  containerRef: React.RefObject<HTMLElement>
  currentModal: string,
  oneIsOpen: boolean,
  closeOnBlur: boolean,
  bodyScrollIsLocked: boolean,
  classPrefix?: string,
  closeAll: () => void,
  setCloseOnBlur: (set: boolean) => void, // eslint-disable-line no-unused-vars
  open: (slug: string) => void, // eslint-disable-line no-unused-vars
  toggle: (slug: string) => void, // eslint-disable-line no-unused-vars
  setContainerRef: (ref: HTMLElement) => void, // eslint-disable-line no-unused-vars
  setBodyScrollLock: (
    shouldLock: boolean, // eslint-disable-line no-unused-vars
    excludingRef: React.RefObject<HTMLElement> // eslint-disable-line no-unused-vars
  ) => void,
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export default ModalContext;
