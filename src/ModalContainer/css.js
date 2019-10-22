const generateCSS = baseClass => (`
  .${baseClass} {
    transform: translateZ(0);
    transition: all 200ms ease;
    visibility: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, .75);
    color: unset;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }

  .${baseClass}--is-open {
    color: white;
    opacity: 1;
    visibility: visible;
    z-index: 39;
  }

  .${baseClass} > * {
      transition: 200ms ease;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      visibility: hidden;
  }

  .${baseClass}--is-open > * {
    opacity: 1;
    visibility: visible;
  }
`);

export default generateCSS;
