import React, { Fragment } from 'react';
import { ModalProvider, ModalContainer, ModalToggler } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import ModalDemo1 from './Modal1.demo';
import ModalDemo2 from './Modal2.demo';
import ModalHook from './ModalHook.demo';

const App = () => (
  <Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .demo__modal-item {
            transition: all 250ms cubic-bezier(0, 0, 0.2, 1);
            opacity: 0;
          }

          .demo__modal-item--will-open,
          .demo__modal-item--is-open {
            opacity: 1;
          }
        `,
      }}
    />
    <ModalProvider
      classPrefix="demo"
      transTime={250}
    >
      <ModalToggler
        slug="demo1"
        className="demo-className"
        htmlAttributes={{
          onClick: () => console.count('click'), // eslint-disable-line no-console
        }}
      >
        Click to open demo 1
      </ModalToggler>
      <ModalDemo1 />
      <ModalToggler slug="demo2">
        Click to open demo 2
      </ModalToggler>
      <ModalDemo2 slug="demo2" />
      <ModalContainer className="customAdditionalClass" />
      <ModalHook />
    </ModalProvider>
  </Fragment>
);

export default App;
