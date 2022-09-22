import useAuth from 'service/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/mycontacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
