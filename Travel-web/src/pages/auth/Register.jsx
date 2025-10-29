import React, { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { Navigate } from 'react-router'

const Register = () => {
     const register = useAuthStore(state => state.register)
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const submitRegister = async (e) => {
          e.preventDefault()
          register(name, email, password)

     }

     return (
          <>
               <h1>Register page</h1>
               <h3>Create your account</h3>
               <div className=''>
                    <form onSubmit={submitRegister}>
                         <input required='true' type="name" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
                         <br />
                         <input required='true' type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                         <br />
                         <input required='true' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                         <button type='submit'>Sumbit</button>
                    </form>
               </div>
          </>
     )
}

export default Register