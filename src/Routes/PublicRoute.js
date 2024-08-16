import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element: Component }) => {
  const token = localStorage.getItem('token');

  // If token exists, redirect to dashboard (or any protected route)
  return token ? <Navigate to="/dashboard" replace /> : <Component />;
};

export default PublicRoute;
