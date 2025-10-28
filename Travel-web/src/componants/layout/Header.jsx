import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
     const { user, logout } = useAuth();

     return (
          <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
               <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <NavLink to="/" className="text-2xl font-bold hover:text-gray-200">TrustiFY</NavLink>
                    <nav className="flex space-x-6 items-center">
                         <NavLink to="/" className={({ isActive }) => `hover:underline ${isActive ? 'underline' : ''}`}>Home</NavLink>
                         <NavLink to="/get-started" className={({ isActive }) => `hover:underline ${isActive ? 'underline' : ''}`}>Get Started</NavLink>
                         {user ? (
                              <>
                                   <NavLink to="/profile" className="hover:underline">Profile</NavLink>
                                   <button onClick={logout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition">
                                        Logout ({user.name})
                                   </button>
                              </>
                         ) : (
                              <>
                                   <NavLink to="/login" className="hover:underline">Login</NavLink>
                                   <NavLink
                                        to="/register"
                                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition"
                                   >
                                        Register
                                   </NavLink>
                              </>
                         )}
                    </nav>
               </div>
          </header>
     );
};

export default Header;