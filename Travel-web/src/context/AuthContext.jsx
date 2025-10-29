import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const navigate = useNavigate();

     useEffect(() => {
          const token = localStorage.getItem('token');
          if (token) {
               fetchUser(token);
          } else {
               setLoading(false);
          }
     }, []);

     const fetchUser = async (token) => {
          try {
               const res = await fetch('http://localhost:5000/api/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` },
               });
               if (res.ok) {
                    const data = await res.json();
                    setUser(data);
               } else {
                    localStorage.removeItem('token');
               }
          } catch (err) {
               console.error(err);
               localStorage.removeItem('token');
          } finally {
               setLoading(false);
          }
     };

     const login = async (email, password) => {
          try {
               const res = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
               });
               const data = await res.json();
               if (data.token) {
                    localStorage.setItem('token', data.token);
                    await fetchUser(data.token);
                    navigate('/profile');
                    return { success: true };
               } else {
                    return { error: data.error || 'Login failed' };
               }
          } catch (err) {
               return { error: 'Network error' };
          }
     };

     const register = async (name, email, password) => {
          try {
               const res = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password }),
               });
               const data = await res.json();
               if (data.token) {
                    localStorage.setItem('token', data.token);
                    await fetchUser(data.token);
                    navigate('/profile');
                    return { success: true };
               } else {
                    return { error: data.error || 'Registration failed' };
               }
          } catch (err) {
               return { error: 'Network error' };
          }
     };

     const logout = () => {
          localStorage.removeItem('token');
          setUser(null);
          navigate('/');
     };

     const value = { user, login, register, logout, loading };

     return (
          <AuthContext.Provider value={value}>
               {loading ? <div className="flex items-center justify-center min-h-screen">Loading...</div> : children}
          </AuthContext.Provider>
     );
};

export const useAuth = () => useContext(AuthContext);