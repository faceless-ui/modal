import { IModalContext } from '../ModalContext/types';

type HTMLAttributes = {
  id?: string,
  className?: string,
  style?: Record<string, unknown>,
  onClick?: () => void,
}

export type Props = {
  slug: string,
  modal?: IModalContext,
  id?: string,
  className?: string,
  style?: Record<string, unknown>,
  htmlElement?: string,
  htmlAttributes?: HTMLAttributes
}
