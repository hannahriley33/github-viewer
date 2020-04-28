import React from 'react';
import PropTypes from 'prop-types';

const SearchUser = ({ username }) => (
  <>
    <input type="text" name="name" value={username} />
    <button name="button" type="button">Search for user </button>
  </>
);
SearchUser.propTypes = {
  username: PropTypes.string.isRequired
};
export default SearchUser;

  

