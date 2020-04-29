import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem.jsx';

const RepoList = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.id}>
      <RepoItem {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    repoName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default RepoList;
