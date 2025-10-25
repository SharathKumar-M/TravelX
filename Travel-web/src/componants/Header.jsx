import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
     return (
          <>
               <h1 className='text-5xl text-white bg-gray-400 text-center'>txavel website</h1>
               <p className='text-center bg-blue-300 text-2xl'>welcome to oure website</p>
               <div className='space-x-12 text-center'>
                    <NavLink to='/home/login'>Login</NavLink>
                    <NavLink to='/home/register'>Register</NavLink>
                    <NavLink to='/myprofile/edit'>Edit profile</NavLink>
               </div>
          </>
     )
}

export default Header