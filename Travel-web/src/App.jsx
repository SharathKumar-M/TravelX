import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Header from './componants/layout/Header'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App