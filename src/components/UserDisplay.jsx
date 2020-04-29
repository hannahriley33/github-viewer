import React from 'react';
import PropTypes from 'prop-types';

const UserDisplay = ({ name, followers, following, url }) => (
  <li>
    <p>{name}</p>
    <p>{followers}</p>
    <p>{following}</p>
    <a href={url}> Link to Github profile </a>
  </li>
);

UserDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default UserDisplay;
