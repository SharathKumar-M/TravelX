import React, { useState } from 'react'

const Register = () => {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const submitRegister = async (e) => {
          e.preventDefault()

          try {
               const response = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password })
               })
               const data = await response.json()
               console.log(data);

          } catch (error) {
               console.log(error);

          }
     }

     return (
          <>
               <h1>Register page</h1>
               <h3>Create your account</h3>
               <div className=''>
                    <form onSubmit={submitRegister}>
                         <input type="name" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
                         <br />
                         <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                         <br />
                         <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                         <button type='submit'>Sumbit</button>
                    </form>
               </div>
          </>
     )
}

export default Register