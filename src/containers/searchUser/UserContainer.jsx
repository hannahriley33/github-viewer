import React, { Component } from 'react';
import SearchUser from '../../components/SearchUser.jsx';
import RepoList from '../../components/RepoList.jsx';
import { fetchRepos } from '../../services/fetchRepos.js';
import { githubApi } from '../../services/githubApi.js';

export default class UserContainer extends Component {
  
  state = {
    userName: '',
    repos: []
  }
      
      handleSubmit = ({ target }) => {
        fetchRepos()
          .then(repos => this.setState({ repos }));
      
        githubApi()
          .then(userName => this.setState({ userName }));
        this.setState({ [target.name]: target.value });
      };
      
      render() {
        const { userName, repos } = this.state;
        return (
          <>
            <SearchUser username={ userName } />
            <RepoList repos={ repos } />
          </>
        );
      }
}
