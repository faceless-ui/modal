const generateCSS = (baseClass, classPrefix, transTime, transCurve, backgroundColor) => (`
  .${baseClass} {
    transform: translateZ(0);
    transition: all ${transTime}ms ${transCurve};
    visibility: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background-color: ${backgroundColor};
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }

  .${baseClass}--one-is-open {
    opacity: 1;
    visibility: visible;
    z-index: 39;
  }

  .${classPrefix}__modal-item {
    transition: all ${transTime}ms ${transCurve};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
  }

  .${classPrefix}__modal-item--is-open {
    opacity: 1;
    visibility: visible;
  }
`);

export default generateCSS;
