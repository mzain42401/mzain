import React, { useEffect, useState } from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Counter from './components/counter/Counter'
import Loding from './components/loading/Loding'






const Main = () => {
  const [isloading,setisloading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setisloading(false)
    },3000)
  })
  return (
    <>

    {
      isloading?<Loding/>:<>
       <Header/>
      <Home />
      <About /> 

      <Services />
      <Counter/>
      <About /> </>
    }
   
      


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
