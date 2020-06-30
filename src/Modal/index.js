import PropTypes from 'prop-types';
import asModal from '../asModal';

const Modal = (props) => {
  const { children } = props;
  if (children) {
    if (typeof children === 'function') return children({ ...props });
    return children;
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
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]),
};

export default asModal(Modal);
