import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import PublicRouteLayout from './PublicRouteLayout';

const AuthCheck = ({ children, isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    key={rest.path}
    {...rest}
    element={
      <AuthCheck isAuthenticated={isAuthenticated}>
        <PublicRouteLayout component={Component} />
      </AuthCheck>
    }
  />
);

export default PublicRoute;
