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
          <div className={iconDiv}> <span><TbBrandFiverr /></span>Fiverr</div>
          <div className={iconDiv}> <span><FaLinkedinIn /></span>LinkedIn</div>
          <div className={iconDiv}> <span> <FaFacebookF /></span> Facebook</div>
          <div className={iconDiv}><span><AiFillGithub /></span> Github</div>



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
