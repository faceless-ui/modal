import { createContext } from 'react';
import { ModalProviderProps } from '../ModalProvider';

export type ModalStatus = {
  slug: string
  isOpen: boolean
}

export type ModalState = {
  [slug: string]: ModalStatus
}

export interface IModalContext extends ModalProviderProps {
  transTime: number
  containerRef: React.RefObject<HTMLElement>
  // currentModal: string
  modalState: ModalState
  modalIsOpen: boolean
  closeOnBlur: boolean
  bodyScrollIsLocked: boolean
  classPrefix?: string
  closeAllModals: () => void
  setCloseOnBlur: (set: boolean) => void // eslint-disable-line no-unused-vars
  openModal: (slug: string) => void // eslint-disable-line no-unused-vars
  closeModal: (slug: string) => void // eslint-disable-line no-unused-vars
  toggleModal: (slug: string) => void // eslint-disable-line no-unused-vars
  setContainerRef: (ref: HTMLElement) => void // eslint-disable-line no-unused-vars
  setBodyScrollLock: (
    shouldLock: boolean, // eslint-disable-line no-unused-vars
    excludingRef: React.RefObject<HTMLElement> // eslint-disable-line no-unused-vars
  ) => void
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export default ModalContext;
