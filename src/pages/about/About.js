import React from 'react'
import './about.css'
import MyImage from "../../images/me.png"
import { FaFacebookF } from "react-icons/fa";

const About = () => {
  return (
    <>
    <div className="aboutPageContainer">
     <div className="aboutCenterDiv">
      <div className="myImageDiv">
        
        <div className='aboutIconDiv1'>
          <div className='aboutIcon1'>d</div>
          <div className='aboutIcon2'><FaFacebookF/></div>
        </div>
     
        <div className='aboutIconDiv3'>
          <div className='aboutIcon3'><FaFacebookF/></div>
        </div>

        <div className='myPersonalImage'>
          
          
          <img src={MyImage} alt="" /></div></div>
      <div className="aboutMeDiv">zjhkj</div>

     </div>
    </div>
    </>
  )
}

export default About
