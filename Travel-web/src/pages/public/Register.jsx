import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
     const [formData, setFormData] = useState({ name: '', email: '', password: '' });
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false);
     const { register } = useAuth();

     const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          setError('');
          const result = await register(formData.name, formData.email, formData.password);
          if (result.error) setError(result.error);
          setLoading(false);
     };

     return (
          <div className="min-h-screen flex items-center justify-center py-12 px-4">
               <div className="max-w-md w-full space-y-8">
                    <div>
                         <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Join TrustiFY</h2>
                    </div>
                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                         <div className="space-y-4">
                              <input
                                   name="name"
                                   type="text"
                                   required
                                   value={formData.name}
                                   onChange={handleChange}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   placeholder="Full Name"
                              />
                              <input
                                   name="email"
                                   type="email"
                                   required
                                   value={formData.email}
                                   onChange={handleChange}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   placeholder="Email"
                              />
                              <input
                                   name="password"
                                   type="password"
                                   required
                                   value={formData.password}
                                   onChange={handleChange}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   placeholder="Password"
                              />
                         </div>
                         <button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 transition"
                         >
                              {loading ? 'Creating...' : 'Register'}
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default Register;