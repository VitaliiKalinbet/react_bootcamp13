import React from 'react';
import PropTypes from 'prop-types';

const style = {
  color: 'red',
};

const ErrorsNotification = ({ error }) => {
  return <p style={{ ...style }}>{error}</p>;
};

ErrorsNotification.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorsNotification;
