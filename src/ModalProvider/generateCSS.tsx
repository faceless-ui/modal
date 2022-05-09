import { containerBaseClass } from '../ModalContainer';
import { itemBaseClass } from '../asModal';

const CSS = ({
  classPrefix,
  zIndex,
}: {
  classPrefix?: string,
  zIndex: number,
}): string => {
  const prefixToUse = classPrefix ? `${classPrefix}__` : '';

  return (`
    .${prefixToUse}${containerBaseClass} {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      pointer-events: none;
      visibility: hidden;
      z-index: -1;
    }

    .${prefixToUse}${containerBaseClass}--appear,
    .${prefixToUse}${containerBaseClass}--appearDone,
    .${prefixToUse}${containerBaseClass}--enter,
    .${prefixToUse}${containerBaseClass}--enterDone,
    .${prefixToUse}${containerBaseClass}--exit {
      pointer-events: all;
      visibility: visible;
      z-index: ${zIndex};
    }

    .${prefixToUse}${itemBaseClass} {
      position: absolute;
      visibility: hidden;
    }

    .${prefixToUse}${itemBaseClass}--appear,
    .${prefixToUse}${itemBaseClass}--appearDone,
    .${prefixToUse}${itemBaseClass}--enter,
    .${prefixToUse}${itemBaseClass}--enterDone,
    .${prefixToUse}${itemBaseClass}--exit {
      visibility: visible;
    }
  `);
};

export default CSS;
