import containerBaseClass from '../ModalContainer/baseClass';
import itemBaseClass from '../asModal/baseClass';

const generateCSS = (classPrefix, zIndex) => (`
  .${classPrefix}__${containerBaseClass} {
    visibility: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    opacity: 0;
    z-index: -1;
  }

  .${classPrefix}__${containerBaseClass}--one-is-open {
    opacity: 1;
    visibility: visible;
    z-index: ${zIndex};
  }

  .${classPrefix}__${itemBaseClass} {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
  }

  .${classPrefix}__${itemBaseClass}--is-open {
    opacity: 1;
    visibility: visible;
  }
`);

export default generateCSS;
