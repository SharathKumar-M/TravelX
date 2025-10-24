import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const navigate = useNavigate()
     const submitLogin = async (e) => {
          e.preventDefault()

          try {
               const response = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password })
               })
               const data = await response.json()
               console.log(data);
               localStorage.setItem("token", data.token)
               navigate('/myprofile')

          } catch (error) {
               console.log(error);

          }
     }

     return (
          <>
               <h1>Login</h1>
               <h3>Login your account</h3>
               <div className=''>
                    <form onSubmit={submitLogin}>
                         <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                         <br />
                         <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                         <br />

                         <button type='submit'>Login</button>
                    </form>
               </div>
          </>
     )
}

export default Login