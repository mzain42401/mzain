import React from 'react'
import classes from './services.module.css'
import { AiOutlineBlock, AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
const Services = () => {
  const { servicesSection, mainIconDiv, iconDiv, servicesCenterDiv, myService, logo, name, discription } = classes
  return (
    <>
      <section id='services' className={servicesSection}>
        <div className={mainIconDiv}>
          <div className={iconDiv}> <a href="https://www.fiverr.com/mzain42401?up_rollout=true" target='_blank'><span><TbBrandFiverr /></span>Fiverr</a></div>
          <div className={iconDiv}> <a href="https://www.linkedin.com/in/m-zain-ali-3b3293256/"  target='_blank'><span><FaLinkedinIn /></span>LinkedIn</a></div>
          <div className={iconDiv}> <a href="https://www.facebook.com/profile.php?id=100094551577002" target='_blank'><span> <FaFacebookF /></span> Facebook</a></div>
          <div className={iconDiv}><a href="https://github.com/mzain42401" target='_blank'><span><AiFillGithub /></span> Github</a></div>



        </div>

        <h1>My Services</h1>

        <div className={servicesCenterDiv}>

          <div className={myService}>
            <div className={logo}>

              <AiOutlineBlock />
            </div>
            <div className={name}>
              resopnsi dseihjn
            </div>
            <div className={discription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, illum. Officia incidunt ex, ea reprehenderit placeat vel perferendis provident .
            </div>

          </div>
          <div className={myService}>
            <div className={logo}>

              <AiOutlineBlock />
            </div>
            <div className={name}>
              resopnsi dseihjn
            </div>
            <div className={discription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, illum. Officia incidunt ex, ea reprehenderit placeat vel perferendis provident .
            </div>

          </div><div className={myService}>
            <div className={logo}>

              <AiOutlineBlock />
            </div>
            <div className={name}>
              resopnsi dseihjn
            </div>
            <div className={discription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, illum. Officia incidunt ex, ea reprehenderit placeat vel perferendis provident .
            </div>

          </div><div className={myService}>
            <div className={logo}>

              <AiOutlineBlock />
            </div>
            <div className={name}>
              resopnsi dseihjn
            </div>
            <div className={discription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, illum. Officia incidunt ex, ea reprehenderit placeat vel perferendis provident .
            </div>

          </div>
          <div className={myService}>
            <div className={logo}>

              <AiOutlineBlock />
            </div>
            <div className={name}>
              resopnsi dseihjn
            </div>
            <div className={discription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, illum. Officia incidunt ex, ea reprehenderit placeat vel perferendis provident .
            </div>

          </div>
          <div className={myService}>
            <div className={logo}>

              <AiOutlineBlock />
            </div>
            <div className={name}>
              resopnsi dseihjn
            </div>
            <div className={discription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, illum. Officia incidunt ex, ea reprehenderit placeat vel perferendis provident .
            </div>

          </div>
          

        </div>
      </section>
    </>
  )
}

export default Services
