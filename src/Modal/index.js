import PropTypes from 'prop-types';
import asModal from '../asModal';

const Modal = (props) => {
  const { children, modal } = props;
  if (children && typeof children === 'function') return children(modal);
  return null;
};

Modal.defaultProps = {
  children: undefined,
};

Modal.propTypes = {
  children: PropTypes.func,
  modal: PropTypes.shape({}).isRequired,
};

export default asModal(Modal);
