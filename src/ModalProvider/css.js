import containerBaseClass from '../ModalContainer/baseClass';
import itemBaseClass from '../asModal/baseClass';

export default (classPrefix, zIndex) => (`
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

  .${classPrefix}__${containerBaseClass}--appear,
  .${classPrefix}__${containerBaseClass}--appearDone,
  .${classPrefix}__${containerBaseClass}--enter,
  .${classPrefix}__${containerBaseClass}--enterDone,
  .${classPrefix}__${containerBaseClass}--exit {
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
    border: unset;
    background: unset;
    padding: unset;
  }

  .${classPrefix}__${itemBaseClass}--appear,
  .${classPrefix}__${itemBaseClass}--appearDone,
  .${classPrefix}__${itemBaseClass}--enter,
  .${classPrefix}__${itemBaseClass}--enterDone,
  .${classPrefix}__${itemBaseClass}--exit {
    visibility: visible;
  }
`);
