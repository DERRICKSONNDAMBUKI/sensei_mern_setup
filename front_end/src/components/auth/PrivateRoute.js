import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import auth from './auth-helper'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  

  return (
    
    <Route {...rest} element={(
      auth.isAuthenticated() ? (
        <Component />
      ) : (
        <Navigate to={{
          pathname: '/signin',
          state: { from: rest.location }
        }} replace />
      )
    )} />
  );
};