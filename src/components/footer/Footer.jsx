import React from 'react'
import classes from './footer.module.css'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
    const {footer,footerLast,footerTop,link,icon,iconName}=classes
  return (
    <>
      <section className={footer}>
<div className={footerTop}>
  
                <div><a className={link} href="https://github.com/mzain42401" target="_blank"><span className={icon}>
                <BsGithub /></span>  <span className={iconName}>GITHUB</span>  </a>  </div>


                <div><a className={link} href="https://www.linkedin.com/in/m-zain-ali-3b3293256/" target="_blank"><span className={icon}>
                <FaLinkedinIn /></span>  <span className={iconName}>LINKEDIN</span>  </a>  </div>


                <div><a className={link}  href = "mailto: mzain42401@gmail.com" ><span className={icon}>
                <MdEmail /></span>  <span className={iconName}>MIAL</span>  </a>  </div>

                <div><a className={link} href="https://www.facebook.com/profile.php?id=100094551577002" target="_blank"><span className={icon}>
                <FaFacebookF /></span>  <span className={iconName}>FACEBOOK</span>  </a>  </div>


                <div><a className={link} href="https://www.fiverr.com/mzain42401?up_rollout=true" target="_blank"><span className={icon}>
                <SiFiverr /></span>  <span className={iconName}>FIVERR</span>  </a>  </div>









             

</div>

<div className={footerLast}>
Made by <span>ZAIN ALI</span> | <span>2023</span> 

</div>

      </section>
    </>
  )
}

export default Footer
