import React, { ElementType, HTMLProps, MouseEvent } from 'react';
import { IModalContext } from '../ModalContext';
import useModal from '../useModal';

export const togglerBaseClass = 'modal-toggler';

export type Props = HTMLProps<HTMLElement> & {
  slug: string
  modal?: IModalContext
  htmlElement?: ElementType
  children?: React.ReactNode
}

const ModalToggler: React.FC<Props> = (props) => {
  const {
    slug,
    htmlElement: Tag = 'button',
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

  const baseClass = classPrefix ? `${classPrefix}__${togglerBaseClass}` : togglerBaseClass;
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
