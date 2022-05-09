import React, { ElementType, HTMLProps, MouseEvent } from 'react';
import { IModalContext } from '../ModalContext';
import useModal from '../useModal';

export type Props = HTMLProps<HTMLElement> & {
  slug: string
  modal?: IModalContext
  htmlElement?: ElementType
  children?: React.ReactNode
}

const ModalToggler: React.FC<Props> = (props) => {
  const {
    slug,
    htmlElement = 'button',
    children,
    onClick,
    className,
    ...rest
  } = props;

  const {
    currentModal,
    toggle,
    classPrefix,
  } = useModal();

  const baseClass = `${classPrefix}__modal-toggler`;
  const isOpen = currentModal === slug;

  const mergedClasses = [
    baseClass,
    `${baseClass}--slug-${slug}`,
    isOpen && `${baseClass}--slug-${slug}--is-open`,
    className,
  ].filter(Boolean).join(' ');

  const mergedAttributes = {
    role: 'button',
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-controls': slug,
    ...rest,
    onClick: (e: MouseEvent<HTMLElement>) => {
      toggle(slug);
      if (typeof onClick === 'function') onClick(e);
    },
  };

  const Tag = htmlElement as React.ElementType;

  return (
    <Tag
      {...{
        className: mergedClasses,
        ...mergedAttributes,
      }}
    >
      {children && children}
    </Tag>
  );
};

export default ModalToggler;
