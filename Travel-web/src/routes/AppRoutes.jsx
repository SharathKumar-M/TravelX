import { Routes, Route } from 'react-router-dom';
import Layout from '../componants/layout/Layout';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';

// Public
import Home from '../pages/public/Home';
import GetStarted from '../pages/public/GetStarted';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';

// Protected
import MyProfile from '../pages/protected/MyProfile';
import EditProfile from '../pages/protected/EditProfile';

const AppRoutes = () => {
     return (
          <Routes>
               <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/get-started" element={<GetStarted />} />
                    <Route element={<PublicRoute />}>
                         <Route path="/login" element={<Login />} />
                         <Route path="/register" element={<Register />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                         <Route path="/profile" element={<MyProfile />} />
                         <Route path="/profile/edit" element={<EditProfile />} />
                    </Route>
               </Route>
               <Route path="*" element={<div className="text-center p-10 text-gray-500">404 - Page Not Found</div>} />
          </Routes>
     );
};

export default AppRoutes;