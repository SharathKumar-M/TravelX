import React, { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { useNavigate } from 'react-router-dom'

const Register = () => {
     const { register, loading } = useAuthStore();
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const navigate = useNavigate();


     const submitRegister = async (e) => {
          e.preventDefault()
          register(name, email, password);
          navigate('/profile');

     }

     return (
          <>
               <h1>Register page</h1>
               <h3>Create your account</h3>
               <div className=''>
                    <form onSubmit={submitRegister}>
                         <input required='true' type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
                         <br />
                         <input required='true' type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                         <br />
                         <input required='true' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                         <button type='submit' disabled={loading}>
                              {loading ? 'Registering...' : 'Submit'}
                         </button>
                    </form>

                    <p>Have an account?<a className='text-blue-400' href="/home/login">Sign in</a></p>

                    <div className="space-y-4 mt-4">
                         <a
                              href="/api/auth/google"  //(proxies to backend)
                              className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                         >
                              Register with Google
                         </a>
                         <a
                              href="/api/auth/github"
                              className=" bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
                         >
                              Register with GitHub
                         </a>
                    </div>
               </div>
          </>
     )
}

export default Register