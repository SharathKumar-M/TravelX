import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = () => {
     const { user, loading } = useAuth();
     if (loading) return <div className="text-center p-10">Loading...</div>;
     return user ? <Navigate to="/profile" replace /> : <Outlet />;
};

export default PublicRoute;