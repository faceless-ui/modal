import { Props } from '../ModalProvider/types';

export interface IModalContext extends Props {
  transTime: number,
  containerRef: React.MutableRefObject<Record<string, unknown>>,
  currentModal: string,
  oneIsOpen: boolean,
  closeOnBlur: boolean,
  bodyScrollIsLocked: boolean,
  classPrefix: string,
  closeAll: () => void,
  setCloseOnBlur: (boolean) => void,
  open: (slug: string) => void,
  toggle: (slug: string) => void,
  setContainerRef: (ref: React.MutableRefObject<Record<string, unknown>>) => void,
  setBodyScrollLock: (
    shouldLock: boolean,
    excludingRef: React.MutableRefObject<Record<string, unknown>>
  ) => void,
}
