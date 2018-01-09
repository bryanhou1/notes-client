import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import {connect} from 'react-redux';
import {matchLocalStorageToState, initiateSession} from '../actions/index';

import './App.css';
import NavBar from './NavBar';
import Routes from '../components/Routes';

class App extends Component {

  componentDidMount() {
    this.props.matchLocalStorageToState();
    this.props.initiateSession();
  }
  
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div id="sidebar-and-main-container">
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

export default connect(null, {matchLocalStorageToState, initiateSession})(App);