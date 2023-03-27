import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import PublicRoute from './publicRoute';

import UserRoute from './userRoute';
import Profile from '../pages/profile';
import Signup from '../pages/signup';
import POCPage from '../pages/poc';

const routerMapper = [
  {
    path: '/login',
    component: Login,
    routeComponent: PublicRoute,
  },
  {
    path: '/signup',
    component: Signup,
    routeComponent: PublicRoute,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    routeComponent: UserRoute,
  },
  {
    path: '/profile',
    component: Profile,
    routeComponent: UserRoute,
  },
  {
    path: '/poc',
    component: POCPage,
    routeComponent: PublicRoute,
  },
];

const RouterConfig = () => {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Navigate to={isAuthenticated ? '/login' : '/login'} />}
        />
        {routerMapper.map(({ component, path, routeComponent }) =>
          routeComponent({ path, isAuthenticated, component }),
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
