import React, { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'

const Login = () => {
     const login = useAuthStore(state => state.login)
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const submitLogin = async (e) => {
          e.preventDefault()

          login(email, password)
     }

     return (
          <>
               <h1>Login</h1>
               <h3>Login your account</h3>
               <div className=''>
                    <form onSubmit={submitLogin}>
                         <input required='true' type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                         <br />
                         <input required='true' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                         <br />

                         <button type='submit' navigate='/myprofile'>Login</button>
                    </form>
               </div>
          </>
     )
}

export default Login