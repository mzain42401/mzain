import React from 'react'
import { useRef,useState } from 'react';
import "./navbar.css"
import { MenuOutlined, CloseOutlined   } from '@ant-design/icons';
import Image from "../../images/myPic.png"



const Navbar = () => {
let [initial,setInitial]=useState(true)
  let navRef = useRef()

const toggleIcons=()=>{
  setInitial(!initial)
  showNav()
}


  const showNav = () => {
    navRef.current.classList.toggle("active")
  }
  

  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <div className='imageLogoDiv'><img src={Image} alt="My Pic" /></div> <span ></span>
        </div>

        <ul ref={navRef} >
          <li><a href="">HOME</a> </li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">SERVICES</a></li>
          <li><a href="">SKILLS</a></li>
          <li><a href="">PROJECTS</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
        <div className='navToggleBtn' onClick={toggleIcons}>{initial?<MenuOutlined />:<CloseOutlined/>}</div>
      </nav>
    </>
  )
}

export default Navbar
