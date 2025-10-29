import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

const EditProfile = () => {
     const { user, updateProfile, loading, error } = useAuthStore();
     const [name, setName] = useState("");
     const navigate = useNavigate();

     useEffect(() => {
          if (user?.name) setName(user.name);
     }, [user]);

     const handleSubmit = async (e) => {
          e.preventDefault();
          await updateProfile(name);
          if (!error) navigate("/myprofile");
     };

     return (
          <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
               <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>

               {error && <p className="text-red-600 mb-3">{error}</p>}

               <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Your name"
                         required
                         className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                         type="submit"
                         disabled={loading}
                         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                         {loading ? "Updating…" : "Update Profile"}
                    </button>
               </form>
          </div>
     );
};

export default EditProfile;