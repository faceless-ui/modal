import React from 'react';
import { Props } from '../ModalProvider/types';

export interface IModalContext extends Props {
  transTime: number,
  containerRef: React.RefObject<HTMLElement>
  currentModal: string,
  oneIsOpen: boolean,
  closeOnBlur: boolean,
  bodyScrollIsLocked: boolean,
  classPrefix: string,
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
