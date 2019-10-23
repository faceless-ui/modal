const generateTransitionClasses = (baseClass) => {
  if (baseClass) {
    return ({
      appear: `${baseClass}--will-open`,
      appearActive: `${baseClass}--is-opening`,
      appearDone: `${baseClass}--is-open`,
      enter: `${baseClass}--will-open`,
      enterActive: `${baseClass}--is-opening`,
      enterDone: `${baseClass}--is-open`,
      exit: `${baseClass}--will-close`,
      exitActive: `${baseClass}--is-closing`,
      exitDone: `${baseClass}--has-closed`,
    });
  }
  return {};
};

export default generateTransitionClasses;
