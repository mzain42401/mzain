import React, { useEffect, useState,Suspense,lazy } from 'react'
import Loding from './components/loading/Loding'
const Header=lazy(()=>import('./components/Header/Header'))
const Home=lazy(()=>import('./components/home/Home'))
const About=lazy(()=>import('./components/about/About'))
const Projects=lazy(()=>import('./components/projects/Projects'))
const Services=lazy(()=>import('./components/services/Services'))
const Skills=lazy(()=>import('./components/skills/Skills'))
const Counter=lazy(()=>import('./components/counter/Counter'))
const Contact=lazy(()=>import('./components/contact/Contact'))
const Footer=lazy(()=>import('./components/footer/Footer'))




const Main = () => {
  const [isloading,setisloading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setisloading(false)
    },2000)
  })
  return (
    <>
    
<Suspense fallback={<Loding/>}>

    {
      isloading?<Loding/>:<>
       <Header/>
      <Home />
      <About /> 

      <Services />
      <Counter/>
      <About /> </>
    }
   
   </Suspense>


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
