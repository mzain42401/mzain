import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'






const Main = () => {
  return (
    <>
    <Header/>
      <Home />
      <About /> 

    {/* 
      {/*  */}
      {/* <Projects />
      <Skills />
      <Services />
      <Contact />
          <Footer/> */}
    </>
  )
}

export default Main
