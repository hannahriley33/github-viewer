import React, { Component } from 'react';
import SearchUser from '../../components/SearchUser.jsx';
import UserDisplay from '../../components/UserDisplay.jsx';
import { fetchUser } from '../../services/fetchUser.js';

export default class UserContainer extends Component {
  state = {
    userDisplay: {},
    userName: 'hannahriley33',
    loading: true
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => { 
    event.preventDefault();
    this.setState({ loading: true });
    fetchUser(this.state.userName)
      .then(userDisplay => this.setState({ userDisplay, loading: false }));
  };

  componentDidMount() {
    fetchUser(this.state.userName)
      .then(userDisplay => this.setState({ userDisplay, loading: false }));
  }
      
  render() {
    const { userName, userDisplay, loading } = this.state;
    if(loading) 
      return (<h1>...still loading</h1>);

    return (
      <>
        <SearchUser userName={ userName } handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <UserDisplay {...userDisplay} />
      </>
    );
  }
}
