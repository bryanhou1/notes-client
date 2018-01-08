import React from 'react';
import PrivateRoute from './PrivateRoute';
import {Route} from 'react-router-dom';
import SignInForm from '../containers/SignInForm';
import SignUpForm from '../containers/SignUpForm';
import Home from '../containers/Home';

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