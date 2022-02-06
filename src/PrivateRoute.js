import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ component:Component, ...rest }) {

	const { currentUser } = useAuth()

  return (
	  <Route
	  {...rest}
	  render={props => {
		return currentUser ? <Component {...props}/> : <Redirect to="/signin" />
	  }}>
	  </Route>
  );
}

export default PrivateRoute;
