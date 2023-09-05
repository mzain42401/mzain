import React, { useEffect } from "react";
import classes from './home.module.css'
import image from "../../images/ja.png";
import Aos from "aos";
import 'aos/dist/aos.css'
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { SiFiverr } from "react-icons/si"
import Typewriter from "typewriter-effect";
import Btn from "../Btn/Btn";




// import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  const { homeContainer, homeCenterDiv, homeContentDiv, wave, typewriter, content, homeLinkDiv, homeIcon, homeLink, homeImageDiv, imag, btnDiv } = classes

  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (
    <>
      <section id="home" className={homeContainer}>
        <div className={homeCenterDiv}>
          <div className={homeContentDiv}>
            <h1 data-aos="fade-right">
              Hi, I'm Zain
              <span className={wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <div className={typewriter} data-aos="fade-left">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Freelancer",
                    "UI/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  
                }}
              />
            </div>
            <div className={content} data-aos="fade-up">
              <p>
              {/* 🚀 */}
              A passionate Front-end Developer  having an experience of
              building Web and Mobile applications with JavaScript / Reactjs /
              Nextjs / TailwindCSS and some other cool libraries and frameworks.
              </p>
              {/* <div className={homeLinkDiv}>

                <div className={homeLink}><a className={homeIcon} href="https://github.com/mzain42401" target="_blank"><BsGithub /></a>  </div>
                <div className={homeLink}><a className={homeIcon} href="https://www.linkedin.com/in/m-zain-ali-3b3293256/" target="_blank"><FaLinkedinIn /></a>  </div>
                <div className={homeLink}><a className={homeIcon} href=""><MdEmail /></a>  </div>
                <div className={homeLink}><a className={homeIcon} href="https://www.facebook.com/profile.php?id=100068863491633" target="_blank"><FaFacebookF /></a>  </div>
                <div className={homeLink}><a className={homeIcon} href="https://www.fiverr.com/mzain42401?up_rollout=true" target="_blank"><SiFiverr /></a>  </div>






              </div> */}
              <div className={btnDiv}>
                <Btn />



              </div>
            </div>


          </div>


        </div>
      </section>
    </>
  );
};

export default Home;
