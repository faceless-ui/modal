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
  setCloseOnBlur: (boolean) => void, // eslint-disable-line no-unused-vars
  open: (slug: string) => void, // eslint-disable-line no-unused-vars
  toggle: (slug: string) => void, // eslint-disable-line no-unused-vars
  setContainerRef: (ref: React.MutableRefObject<Record<string, unknown>>) => void, // eslint-disable-line no-unused-vars
  setBodyScrollLock: (
    shouldLock: boolean, // eslint-disable-line no-unused-vars
    excludingRef: React.MutableRefObject<Record<string, unknown>> // eslint-disable-line no-unused-vars
  ) => void,
}
