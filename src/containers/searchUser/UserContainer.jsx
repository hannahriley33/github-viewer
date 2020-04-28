import React, { Component } from 'react';
import SearchUser from '../../components/SearchUser.jsx';
import UserDisplay from '../../components/UserDisplay.jsx';
import ColorDisplay from '../../components/ColorDisplay/ColorDisplay.jsx';
import { fetchRepos } from '../../services/fetchRepos.js';

export default class SearchUser extends Component {
  
  state = {
    userName: '',
    repos: []
  }
      
      handleSubmit = ({ target }) => {
        fetchRepos()
          .then(repos => this.setState({ repos }));
      
          githubApi()
            .then(userName => this.setState({ userName }))
        this.setState({ [target.name]: target.value });
      };
      
      render() {
        const { userName, repos } = this.state;
        return (
          <>
            <SearchUser username={ username } />
            <RepoList repos={ repos } />
      </>
    );
  }
}
