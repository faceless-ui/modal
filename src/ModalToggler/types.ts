import { CSSProperties, ElementType } from 'react';
import { IModalContext } from '../ModalContext/types';

export type Props = {
  slug: string,
  modal?: IModalContext,
  id?: string,
  className?: string,
  style?: CSSProperties,
  htmlElement?: ElementType,
  htmlAttributes?: {
    [key: string]: unknown,
  }
}
