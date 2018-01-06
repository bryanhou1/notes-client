import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import isLoggedIn from '../helpers/isLoggedIn'; // doesn't work

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
  <Route {...rest} render={props => (
    localStorage.token ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/sign_in',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
}

export default PrivateRoute;