import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';

import './App.css';
import NavBar from './NavBar';
import Routes from '../components/Routes';

class App extends Component {

  componentDidMount() {
    this.props.getAuthStatus();
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}
//getAuthStatus();

export default connect(null, mapDispatchToProps)(App);