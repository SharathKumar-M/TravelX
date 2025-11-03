import { Link } from 'react-router'
import { useAuthStore } from '../../stores/authStore'

const Myprofile = () => {
     const user = useAuthStore(state => state.user)
     const loading = useAuthStore(state => state.loading)
     const error = useAuthStore(state => state.error)
     const logout = useAuthStore(state => state.logout)



     if (loading) return <p>Loaging... please wait</p>;
     if (error) return <p>style={{ color: 'red' }}Error:{error}</p>
     if (!user.name) return <p>No User Data, try Logging in again.</p>
     return (
          <>
               <div className=''>
                    <h1>My Profile</h1>
                    <h3 className='text-5xl text-blue-400'>Hello {user.name}</h3>
                    <p>Email - {user.email}</p>
                    <br />
                    <button onClick={logout}>Logout</button>
                    <br /><br />
                    <Link to='/myprofile/edit'>Edit Profile</Link>
               </div>
          </>
     )
}

export default Myprofile