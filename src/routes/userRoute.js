import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserLayout } from '../components';

function UserRoute({
  component: Component,
  loaderCount,
  isAuthenticated,
  ...rest
}) {
  return (
<Route
  {...rest}
  element={
      isAuthenticated ? (
        <UserLayout component={Component} loaderCount={loaderCount} />
      ) : (
        <Navigate
          to={{
            pathname: '/login',
          }}
        />
      )
    }
/>
);
}
export default UserRoute;
