import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'client';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { authState } = useAuth();
  const location = useLocation();

  // Check if user is authenticated
  if (!authState.isAuthenticated || !authState.user) {
    // Redirect to login page with return url
    return <Navigate to="/client-login" state={{ from: location }} replace />;
  }

  // Check if user has required role
  if (requiredRole && authState.user.role !== requiredRole) {
    // Redirect to appropriate dashboard based on user role
    const redirectPath = authState.user.role === 'admin' ? '/admin-dashboard' : '/client-dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 