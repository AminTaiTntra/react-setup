import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

const AuthCheck = ({ children, isAuthenticated }) => {
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      key={rest.path}
      {...rest}
      element={
        <AuthCheck isAuthenticated={isAuthenticated}>
          <Component {...rest} />
        </AuthCheck>
      }
    />
  );
};
export default PublicRoute;
