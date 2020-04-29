import React, { Component } from 'react';
import RepoList from '../../components/RepoList.jsx';
import { fetchRepos } from '../../services/fetchRepos.js';

export default class AllRepos extends Component {
  state = {
    repos: [],
    loading: true,
  }

  componentDidMount() {
    fetchRepos()
      .then(repos => this.setState({ repos, loading: false }));
  }

  render() {
    const { repos, loading } = this.state;
    if(loading) return <h1>Loading</h1>;

    return (
      <RepoList repos={repos} />
    );
  }
}
