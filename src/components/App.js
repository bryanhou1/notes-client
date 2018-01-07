import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import isLoggedIn from '../helpers/isLoggedIn';

class App extends Component {

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

export default App;