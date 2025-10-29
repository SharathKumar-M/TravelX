import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Editprofile = () => {
     const [user, setUser] = useState({})
     const [name, setName] = useState('')
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


     useEffect(() => {
          if (!token) {
               navigate('/home/login')
          }
     })

     const updateProfile = async (e) => {
          e.preventDefault()
          try {
               const response = await fetch('http://localhost:5000/api/auth/profile', {
                    method: 'PUT',
                    headers: {
                         "Content-Type": "application/json",
                         "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({ name })
               })
               const data = await response.json()
               console.log(data);
               navigate('/myprofile')
          } catch (error) {
               console.log(error);

          }
     }

     return (
          <>
               <h1>Edit profile</h1>
               <br />
               <form onSubmit={updateProfile}>
                    <input type="text" defaultValue={user.name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <button>Update Profile</button>
               </form>
          </>
     )
}

export default Editprofile