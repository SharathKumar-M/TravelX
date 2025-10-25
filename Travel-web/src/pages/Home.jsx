import React from 'react'
import { NavLink } from 'react-router'


const Home = () => {
     return (
          <>
               <div className='space-x-5'>
                    <NavLink to='/home/login'>Login</NavLink>
                    <NavLink to='/home/register'>Register</NavLink>
                    <NavLink to='/myprofile/edit'>Edit profile</NavLink>
               </div>
          </>
     )
}

export default Home