import React from 'react';
import { Navigate } from 'react-router-dom';
import { useEmployee } from '../contexts/employeeContexts';

const ProtectedRouteEmployee = ({ element, ...rest }) => {
  const { employee, loading } = useEmployee(); // Access loading state

  if (loading) {
    return <div>Loading...</div>; // Show loading while authentication state is being checked
  }

  return employee ? React.cloneElement(element, { ...rest }) : <Navigate to="/employee/login" />;
}

export default ProtectedRouteEmployee;
