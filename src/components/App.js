import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class App extends Component {
  render() {
    return (  
      <Router>
        <div>
          <NavBar />
          <div id="main-container">
            <Route exact path="/" render={() => <h3>Welcome!</h3>} />
            <Route exact path="/sign_in" component={SignInForm} />
            <Route exact path="/sign_up" component={SignUpForm} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

