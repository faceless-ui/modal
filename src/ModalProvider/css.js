import containerBaseClass from '../ModalContainer/baseClass';
import itemBaseClass from '../asModal/baseClass';

const generateCSS = (classPrefix, zIndex) => (`
  .${classPrefix}__${containerBaseClass} {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    pointer-events: none;
    visibility: hidden;
    z-index: -1;
  }

  .${classPrefix}__${containerBaseClass}--will-open,
  .${classPrefix}__${containerBaseClass}--is-open,
  .${classPrefix}__${containerBaseClass}--will-close {
    pointer-events: all;
    visibility: visible;
    z-index: ${zIndex};
  }

  .${classPrefix}__${itemBaseClass} {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    visibility: hidden;
  }

  .${classPrefix}__${itemBaseClass}--will-open,
  .${classPrefix}__${itemBaseClass}--is-open,
  .${classPrefix}__${itemBaseClass}--will-close {
    visibility: visible;
  }
`);

export default generateCSS;
