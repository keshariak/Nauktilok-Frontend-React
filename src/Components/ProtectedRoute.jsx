import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/userContexts';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { student, loading } = useUser(); // Access loading state

  if (loading) {
    return <div>Loading...</div>; // Show loading while authentication state is being checked
  }

  return student ? <Component {...rest} /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
