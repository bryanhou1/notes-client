import React from 'react';
import PrivateRoute from './PrivateRoute';
import {Route} from 'react-router-dom';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Home from './Home';

const Routes = () => {

	return (
		<div>
      <PrivateRoute exact path="/" component={Home}/>

      <Route exact path="/sign_in" component={SignInForm} />
      <Route exact path="/sign_up" component={SignUpForm} />
		</div>
	)
}

export default Routes;