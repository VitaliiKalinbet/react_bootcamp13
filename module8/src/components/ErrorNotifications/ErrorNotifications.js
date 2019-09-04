import React from 'react';
import PropTypes from 'prop-types';
import passProps from '../../hoc/passProps';

const ErrorNotifications = ({ text }) => {
  return <p>Something wrong: {text}</p>;
};

ErrorNotifications.propTypes = {
  text: PropTypes.string.isRequired,
};

export default passProps({ text: 'passProps example' })(ErrorNotifications);
