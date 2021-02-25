import React from 'react';
import { useModal } from '../src';

const CSS: React.FC = () => {
  const { classPrefix, transTime } = useModal();

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .${classPrefix}__modal-item {
            transition: all ${transTime}ms linear;

            /* Safari has no user agent stylesheet for the "dialog" element */
            /* They're recreated from Chrome here */
            left: 0px;
            right: 0px;
            background: white;
            border: black solid;
            padding: 1em;
            background-color: white;
            width: fit-content;
            margin: auto;
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

export default CSS;
