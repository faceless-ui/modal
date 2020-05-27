import PropTypes from 'prop-types';
import { isValidElement } from 'react';
import asModal from '../asModal';

const Modal = (props) => {
  const { children } = props;
  if (children) {
    if (isValidElement(children) || typeof children === 'string') return children;
    if (typeof children === 'function') return children({ ...props });
  }
  return null;
};

Modal.defaultProps = {
  children: undefined,
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
};

export default asModal(Modal);
