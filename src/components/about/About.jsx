import React, { useEffect } from 'react'
import classes from './about.module.css'
// import MyImage from "../../images/zain.png"
import MyImage from "../../images/mylogo.png"

import Btn from '../Btn/Btn';
import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {
  const { aboutPageContainer, aboutCenterDiv, myImageDiv, myPersonalImage, aboutMeDiv, aboutContent, btnDiv, picContentDiv } = classes
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (
    <>
      <section id='about' className={aboutPageContainer}>
        <div className={aboutCenterDiv}>

          <div className={picContentDiv}>
            <div className={myImageDiv} data-aos="fade-right">
              <div className={myPersonalImage}>
                <img src={MyImage} alt="" />
              </div>
            </div>
            <div className={aboutMeDiv} data-aos="fade-up">
              <h1>About Me</h1>
              <p className={aboutContent}>
              🚀 Ready to boost your online presence? I'm your website wizard! From sprucing up existing sites to creating from scratch, I've got the skills. 💻✨ Using HTML, CSS, Bootstrap, JavaScript, Reactjs, Nextjs, TailwindCSS, and more, I'll craft a site that shines worldwide! 💫 Need responsive design? No problem! Your site will dazzle on any device. 📱 Plus, I'm not just about websites—I'm delving into chatbots, generative AI, and LLMs, exploring cutting-edge tech to enhance user interaction! 🤖💬 Let's collaborate and make digital magic! ✨</p>
              <div className={btnDiv}>
                <a href="#contact">   <Btn btnValue="Contact Me" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
