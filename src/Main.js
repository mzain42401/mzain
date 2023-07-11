import React, { useContext } from 'react'
import AuthContx from './context'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'


import Login from './Login'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  const myContx = useContext(AuthContx)
  return (
    <>
      {
        myContx.islogIn ? <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />



        </Routes> : <Login />}

    </>
  )
}

export default Main
