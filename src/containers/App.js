import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import {connect} from 'react-redux';
import {matchLocalStorageToState, initiateSession, logout} from '../actions/index';

import './App.css';
import NavBar from '../components/NavBar';
import Routes from '../components/Routes';

class App extends Component {

  componentDidMount() {
    this.props.matchLocalStorageToState();
    this.props.initiateSession();
  }
  
  render() {
    const {isLoggedIn, logout, currentUser} = this.props;
    return (
      <Router>
        <div>
          <NavBar isLoggedIn={isLoggedIn} logout={logout} currentUser={currentUser}/>
          <div id="sidebar-and-main-container">
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.currentUser.user.jwt,
    currentUser: state.currentUser.user
  };
};

export default connect(mapStateToProps, {matchLocalStorageToState, initiateSession, logout})(App);
