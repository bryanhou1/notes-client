import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (  
      <Router>
        <div>
          <NavBar />
          <div id="main-container">
            <Route exact path="/" render={() => <h3>Welcome!</h3>} />
            <Route exact path="/sign_in" render={() => <h3>Sign In</h3>} />
            <Route exact path="/sign_up" render={() => <h3>Sign up</h3>} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

