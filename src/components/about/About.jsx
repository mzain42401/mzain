import React, { useEffect } from 'react'
import classes from './about.module.css'
import MyImage from "../../images/WhatsApp Image 2023-08-29 at 2.32.45 AM.jpeg"
// import { FaFacebookF } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Btn from '../Btn/Btn';
import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {
  const { aboutPageContainer, aboutCenterDiv,aboutMe, myImageDiv,picBottomBtn, myPersonalImage, aboutMeDiv, aboutTypeWriterdiv, aboutContent, btnDiv,picContentDiv } = classes
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return ( 
    <>
      <div className={aboutPageContainer}>
        <div className={aboutCenterDiv}>
          <div className={aboutMe} >
            <h1>Who i am</h1>
          </div>
          <div className={picContentDiv}>
            <div className={myImageDiv} data-aos="fade-right">

              <div className={myPersonalImage}>


                <img src={MyImage} alt="" />

              </div>
              <div className={picBottomBtn}>

                <Btn />
              </div>
            </div>
            <div className={aboutMeDiv} data-aos="fade-up">

              <div className={aboutTypeWriterdiv}>
                <span> I'm</span>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Freelancer",
                      "UI/UX Designer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
              <p className={aboutContent}>I can design and develop the custom website according to your requirement or Customize or redesign your existing once by using HTML / CSS / Bootstrap / JavaScript / Reactjs /
                Nextjs / TailwindCSS and some other cool libraries and frameworks. I serve my expertise for your business effective worldwide Internet exposure at good prices. I will deliver professional and modern Website Design that will promote your brand frequently. I complete all my project with absolute devotion and perfection. I customize Responsive Website regularly and can help customize yours, so you can get your site up and running.</p>
              <div className={btnDiv}>
                <Btn />
                {/* <Btn /> */}


              </div>



            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
