'use client'
import React, { ElementType, HTMLProps, MouseEvent } from 'react';
import { IModalContext } from '../ModalProvider/context';
import useModal from '../useModal';

export const togglerBaseClass = 'modal-toggler';

export type ModalTogglerProps = HTMLProps<HTMLElement> & {
  slug: string
  modal?: IModalContext
  htmlElement?: ElementType
  children?: React.ReactNode
}

const ModalToggler: React.FC<ModalTogglerProps> = (props) => {
  const {
    slug,
    htmlElement: Tag = 'button',
    children,
    onClick,
    className,
    ...rest
  } = props;

  const {
    modalState,
    toggleModal,
    classPrefix,
  } = useModal();

  const baseClass = classPrefix ? `${classPrefix}__${togglerBaseClass}` : togglerBaseClass;
  const isOpen = modalState[slug] && modalState[slug].isOpen;

  return (
    <Tag
      {...{
        className: [
          baseClass,
          `${baseClass}--slug-${slug}`,
          isOpen && `${baseClass}--slug-${slug}--is-open`,
          className,
        ].filter(Boolean).join(' '),
        role: 'button',
        'aria-expanded': isOpen ? 'true' : 'false',
        'aria-controls': slug,
        'aria-label': `${!isOpen ? 'Open' : 'Close'} modal ${slug}`,
        ...rest,
        onClick: (e: MouseEvent<HTMLElement>) => {
          toggleModal(slug);
          if (typeof onClick === 'function') onClick(e);
        },
      }}
    >
      {children && children}
    </Tag>
  );
};

export default ModalToggler;
