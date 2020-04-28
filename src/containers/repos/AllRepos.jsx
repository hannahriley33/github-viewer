import React, { Component } from 'react';
import RepoList from '../../components/RepoList.jsx';
import { fetchRepos } from '../../services/fetchRepos.js';

export default class AllRepos extends Component {
  state = {
    characters: [],
    loading: true,
  }

  componentDidMount() {
    fetchCharacters()
      .then(characters => this.setState({ characters, loading: false }));
  }

  render() {
    const { characters, loading } = this.state;
    if(loading) return <h1>Loading</h1>;

    return (
      <Characters characters={characters} />
    );
  }
}
