import React from 'react';
import {
 BrowserRouter, Navigate, Route, Routes 
} from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import Login from '../pages/login/login';
import PublicRoute from './PublicRoute';

import UserRoute from './userRoute';

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
];

function Routers() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Navigate to={isAuthenticated ? '/login' : '/login'} />}
        />
        {routerMapper.map(({ component, path, routeComponent }) => routeComponent({ path, isAuthenticated, component }),)}
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
