import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repoName, url }) => (
  <a href={url}>{repoName}</a>
);

RepoItem.propTypes = {
  repoName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RepoItem;
