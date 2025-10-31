import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

const EditProfile = () => {
     const { user, updateProfile, loading, error } = useAuthStore();
     const [name, setName] = useState('');
     const navigate = useNavigate();

     useEffect(() => {
          if (user) setName(user.name);
     }, [user]);

     const submitForm = async (e) => {
          e.preventDefault();
          updateProfile(name);
          navigate('/myprofile')
     };

     return (
          <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
               <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
               {error && <p style={{ color: 'red' }}>{error}</p>}
               <form onSubmit={submitForm} className="space-y-4">
                    <input
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Your name"
                         required
                         className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" disabled={loading}>
                         {loading ? 'Updating...' : 'Update Profile'}
                    </button>
               </form>
          </div>
     );
};

export default EditProfile;