import React from 'react';
import PropTypes from 'prop-types';

const SearchUser = ({ userName, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="userName" value={userName} onChange={handleChange} />
    <button name="userName" value={userName} >Search</button>
  </form>
);
SearchUser.propTypes = {
  userName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default SearchUser;
