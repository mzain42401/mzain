import React from 'react'
import { useRef, useState } from 'react';
import "./navbar.css"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



const Navbar = () => {
  let [initial, setInitial] = useState(true)
  let navRef = useRef()

  const toggleIcons = () => {
    setInitial(!initial)
    showNav()
  }


  const showNav = () => {
    navRef.current.classList.toggle("active")
  }


  return (
    <>
      <nav className="navbar">
        <div className="logo">zain</div>

        <ul ref={navRef}>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">SKILLS</a>
          </li>
          <li>
            <a href="">PROJECTS</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
        </ul>

        <div className="navToggleBtn" onClick={toggleIcons}>
          {initial ? <MenuOutlined /> : <CloseOutlined />}
        </div>
      </nav>
    </>
  );
}

export default Navbar
