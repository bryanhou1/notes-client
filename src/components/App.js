import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/index';

import './App.css';
import NavBar from './NavBar';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Home from './Home';

class App extends Component {

  componentDidMount() {
    this.props.getAuthStatus();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div id="main-container">
            <PrivateRoute exact path="/" component={Home}/>

            <Route exact path="/sign_in" component={SignInForm} />
            <Route exact path="/sign_up" component={SignUpForm} />
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