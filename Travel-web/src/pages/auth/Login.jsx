import React, { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { Navigate } from 'react-router'

const Login = () => {
     const login = useAuthStore(state => state.login)
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const submitLogin = async (e) => {
          e.preventDefault()

          const result = await login(email, password);
          if (result.success) {
               Navigate('/profile');
          }
     }

     return (
          <>
               <h1>Log in to your account</h1>

               <div className=''>
                    <form onSubmit={submitLogin}>
                         <input required='true' type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                         <br />
                         <input required='true' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                         <br />

                         <button type='submit'>Login</button>
                    </form>

                    <p>Don't have an account?<a className='text-blue-400' href="">Sign Up</a></p>

                    <div className="space-y-4 mt-4">
                         <a
                              href="/api/auth/google"  //(proxies to backend)
                              className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                         >
                              Login with Google
                         </a>
                         <a
                              href="/api/auth/github"
                              className=" bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
                         >
                              Login with GitHub
                         </a>
                    </div>
               </div>
          </>
     )
}

export default Login