import React from 'react';
import withModal from '../withModal';
import { Props } from './types';

const ModalToggler: React.FC<Props> = (props) => {
  const {
    id,
    className,
    modal: {
      currentModal,
      toggle,
      classPrefix,
    },
    slug,
    style = {},
    htmlElement: HTMLElement = 'button',
    htmlAttributes = {},
    children,
  } = props;

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
    ...htmlAttributes,
    onClick: () => {
      toggle(slug);
      if (typeof htmlAttributes.onClick === 'function') htmlAttributes.onClick();
    },
  };

  return (
    <HTMLElement
      {...{
        id,
        className: mergedClasses,
        style,
        ...mergedAttributes,
      }}
    >
      {children && children}
    </HTMLElement>
  );
};

export default withModal(ModalToggler);
