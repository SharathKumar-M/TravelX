import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';

const MyProfile = () => {
     const { user, logout } = useAuth();

     useEffect(() => {
          if (!user) return;  // Handled by ProtectedRoute
     }, [user]);

     if (!user) return <div>Loading...</div>;

     return (
          <div className="container mx-auto px-4 py-10">
               <h1 className="text-3xl font-bold mb-6">My Profile</h1>
               <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                    <h2 className="text-2xl mb-4">Welcome, {user.name}!</h2>
                    <p className="text-gray-600 mb-6">Email: {user.email}</p>
                    <div className="space-y-3">
                         <Link
                              to="/profile/edit"
                              className="block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition"
                         >
                              Edit Profile
                         </Link>
                         <button
                              onClick={logout}
                              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                         >
                              Logout
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default MyProfile;