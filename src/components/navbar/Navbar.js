import React from 'react'
import { useRef,useState } from 'react';
import "./navbar.css"
import { MenuOutlined, CloseOutlined   } from '@ant-design/icons';
import Image from "../../images/myPic.png"
import { Link } from 'react-router-dom';
import Button from '../button/Button';



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
          <li><Link to='/'>HOME</Link> </li>
          <li><Link to='/about'>ABOUT</Link> </li>
          <li><Link to='/contact'>Contact</Link> </li>

          {/* <li><a href="">SERVICES</a></li>
          <li><a href="">SKILLS</a></li>
          <li><a href="">PROJECTS</a></li> */}
        </ul>
        <div>
          <Button tittle="Logout"/>
        </div>
        <div className='navToggleBtn' onClick={toggleIcons}>{initial?<MenuOutlined />:<CloseOutlined/>}</div>
      </nav>
    </>
  )
}

export default Navbar
