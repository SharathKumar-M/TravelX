import React from 'react'
import { NavLink } from 'react-router'
import { useAuthStore } from '../stores/authStore'

const Header = () => {
     const user = useAuthStore(state => state.user)
     return (
          <>
               <header className='bg-gray-400 text-white'>
                    <div className='container mx-auto py-2 space-y-4'>
                         <h1 className='text-3xl'>Trustify website</h1>

                         <div className='space-x-8 text-xl'>

                              {user ? (<>
                                   <NavLink to='/'>Home</NavLink>
                                   <NavLink to='/myprofile'>Profile</NavLink>
                              </>) : (<>
                                   <NavLink to='/home/login'>Login</NavLink>
                                   <NavLink to='/home/register'>Register</NavLink></>)}

                         </div>
                    </div>
               </header>
          </>
     )
}

export default Header