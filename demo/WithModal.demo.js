import React from 'react';
import { withModal } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import PropBlock from './PropBlock';

const WithModal = withModal((props) => <PropBlock {...props} />);

export default WithModal;
