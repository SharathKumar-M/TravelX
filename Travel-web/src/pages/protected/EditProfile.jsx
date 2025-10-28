import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const EditProfile = () => {
     const [name, setName] = useState('');
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false);
     const { user } = useAuth();
     const navigate = useNavigate();
     const token = localStorage.getItem('token');

     useEffect(() => {
          if (user) setName(user.name);
          else navigate('/login');
     }, [user, navigate]);

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          setError('');
          try {
               const res = await fetch('http://localhost:5000/api/auth/profile', {
                    method: 'PUT',
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ name }),
               });
               if (res.ok) {
                    const updatedUser = await res.json();
                    // Update context if needed, but refresh will handle
                    navigate('/profile');
               } else {
                    const data = await res.json();
                    setError(data.message || 'Update failed');
               }
          } catch (err) {
               setError('Network error');
          } finally {
               setLoading(false);
          }
     };

     return (
          <div className="container mx-auto px-4 py-10">
               <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
               {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
               <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md space-y-4">
                    <input
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                         placeholder="New Name"
                         required
                    />
                    <button
                         type="submit"
                         disabled={loading}
                         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
                    >
                         {loading ? 'Updating...' : 'Update Profile'}
                    </button>
               </form>
          </div>
     );
};

export default EditProfile;