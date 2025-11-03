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
          <div >
               <h1 >Edit Profile</h1>
               {error && <p style={{ color: 'red' }}>{error}</p>}
               <form onSubmit={submitForm} className="space-y-4">
                    <input
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Your name"
                         required
                    />
                    <button type="submit" disabled={loading}>
                         {loading ? 'Updating...' : 'Update Profile'}
                    </button>
               </form>
          </div>
     );
};

export default EditProfile;