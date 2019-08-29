import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ name, email }) => (
    <div className="profileContainer">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Profile;