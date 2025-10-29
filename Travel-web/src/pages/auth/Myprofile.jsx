import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Myprofile = () => {
     const [user, setUser] = useState({})
     const token = localStorage.getItem('token')
     const navigate = useNavigate()

     const getprofile = async () => {

          try {
               console.log(token);

               const response = await fetch('http://localhost:5000/api/auth/profile', {
                    method: 'GET',
                    headers: {
                         "Content-Type": "application/json",
                         "Authorization": `Bearer ${token}`
                    },
               })
               const data = await response.json()
               console.log(data);
               setUser(data)

          } catch (error) {
               console.log(error);

          }
     }

     useEffect(() => {
          getprofile()
     }, [])

     const logout = () => {
          localStorage.removeItem('token')
          navigate('/')
     }

     useEffect(() => {
          if (!token) {
               navigate('/home/login')
          }
     })


     return (
          <>
               <h1>Myprofile</h1>
               <h3>Hello {user.name}</h3>
               <p>Email - {user.email}</p>
               <br />
               <button onClick={logout}>Logout</button>
               <br /><br />
               <Link to='/myprofile/edit'>Edit Profile</Link>
          </>
     )
}

export default Myprofile