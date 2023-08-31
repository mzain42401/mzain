import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './components/navbar/Navbar'


const Main = () => {
  return (
    <>
    <Navbar/>
      <Home />
      <About />
      <Contact />
          
    </>
  )
}

export default Main
