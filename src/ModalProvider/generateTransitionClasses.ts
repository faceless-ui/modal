const generateTransitionClasses = (baseClass: string): Record<string, unknown> => {
  if (baseClass) {
    return ({
      appear: `${baseClass}--appear`,
      appearActive: `${baseClass}--appearActive`,
      appearDone: `${baseClass}--appearDone`,
      enter: `${baseClass}--enter`,
      enterActive: `${baseClass}--enterActive`,
      enterDone: `${baseClass}--enterDone`,
      exit: `${baseClass}--exit`,
      exitActive: `${baseClass}--exitActive`,
      exitDone: `${baseClass}--exitDone`,
    });
  }
  return {};
};

export default generateTransitionClasses;
