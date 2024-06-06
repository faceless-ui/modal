import React from 'react';
import { useModal } from '../src/index.js';

const CSS: React.FC = () => {
  const {
    classPrefix,
    transTime
  } = useModal();

  const prefixToUse = classPrefix ? `${classPrefix}__` : '';

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .${prefixToUse}modal-item {
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

          .${prefixToUse}modal-item,
          .${prefixToUse}modal-item--exitActive,
          .${prefixToUse}modal-item--exitDone {
            opacity: 0;
          }

          .${prefixToUse}modal-item--appearActive,
          .${prefixToUse}modal-item--appearDone,
          .${prefixToUse}modal-item--enterActive,
          .${prefixToUse}modal-item--enterDone {
            opacity: 1;
          }
        `,
      }}
    />
  );
};

export default CSS;
