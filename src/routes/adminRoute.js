import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '../components';

function AdminRoute({
  component: Component,
  loaderCount,
  isAuthenticated,
  isAdmin,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated && isAdmin ? (
          <AdminLayout
            component={Component}
            loaderCount={loaderCount}
            {...props}
          />
        ) : isAuthenticated ? (
          <Navigate
            to={{
              pathname: '/dashboard',
              state: { from: props.location },
            }}
          />
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        ))}
    />
  );
}
export default AdminRoute;
