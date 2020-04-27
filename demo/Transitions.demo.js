import React from 'react';
import { useModal } from '../src';

const Transitions = () => {
  const { classPrefix, transTime } = useModal();

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .${classPrefix}__modal-item {
            transition: all ${transTime}ms linear;
          }

          .${classPrefix}__modal-item,
          .${classPrefix}__modal-item--exitActive,
          .${classPrefix}__modal-item--exitDone {
            opacity: 0;
          }

          .${classPrefix}__modal-item--appearActive,
          .${classPrefix}__modal-item--appearDone,
          .${classPrefix}__modal-item--enterActive,
          .${classPrefix}__modal-item--enterDone {
            opacity: 1;
          }
        `,
      }}
    />
  );
};

export default Transitions;
