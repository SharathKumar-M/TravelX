import { NavLink } from 'react-router-dom';

const Home = () => (
     <div className="text-center py-20 px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to TrustiFY</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
               Revolutionize document verification with blockchain. Secure, fast, unbreakable.
          </p>
          <div className="space-x-4">
               <NavLink
                    to="/get-started"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
               >
                    Get Started
               </NavLink>
               <NavLink
                    to="/login"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
               >
                    Login
               </NavLink>
          </div>
     </div>
);

export default Home;