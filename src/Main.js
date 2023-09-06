import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Counter from './components/counter/Counter'






const Main = () => {
  return (
    <>
    <Header/>
      <Home />
      <About /> 

      <Services />
      <Counter/>
      <About /> 
      


    {/* 
      {/*  */}
      {/* <Projects />
      <Skills />
      <Contact />
          <Footer/> */}
    </>
  )
}

export default Main
