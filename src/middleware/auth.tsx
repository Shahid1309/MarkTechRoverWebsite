import { Navigate, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../services/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('admin' | 'client')[];
}

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const location = useLocation();
  const user = getCurrentUser();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role as 'admin' | 'client')) {
    // Redirect to appropriate dashboard if role is not allowed
    return <Navigate to={user.role === 'admin' ? '/admin-dashboard' : '/client-dashboard'} replace />;
  }

  return <>{children}</>;
}; 