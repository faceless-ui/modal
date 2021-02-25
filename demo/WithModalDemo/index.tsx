import React from 'react';
import { withModal } from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from '../LogProps';

const WithModal = withModal((props) => <LogProps {...props} />);

export default WithModal;
