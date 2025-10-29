import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Myprofile from './pages/auth/Myprofile.jsx'
import Editprofile from './pages/auth/Editprofile.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/home/register' element={<Register />} />
          <Route path='/home/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/myprofile/edit' element={<Editprofile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
