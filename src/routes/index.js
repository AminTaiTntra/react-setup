import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import PublicRoute from './publicRoute';

import UserRoute from './userRoute';
import Profile from '../pages/profile';

const routerMapper = [
  {
    path: '/login',
    component: Login,
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
];

const Routers = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />}
        />
        {routerMapper.map(({ component, path, routeComponent }) => {
          return routeComponent({ path, isAuthenticated, component });
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
