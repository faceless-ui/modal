import PropTypes from 'prop-types';
import asModal from '../asModal';

const Modal = (props) => {
  const { children, modal } = props;
  return children(modal);
};

Modal.defaultProps = {
  children: undefined,
};

Modal.propTypes = {
  children: PropTypes.func,
  modal: PropTypes.shape({}).isRequired,
};

export default asModal(Modal);
