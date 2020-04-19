import React from 'react';
import PropTypes from 'prop-types';
import asModal from '../asModal';

const Modal = (props) => {
  const { children, modal } = props;
  return (
    <div>
      {children(modal)}
    </div>
  );
};

Modal.defaultProps = {
  children: undefined,
};

Modal.propTypes = {
  children: PropTypes.func,
  modal: PropTypes.shape({}).isRequired,
};

export default asModal(Modal);
