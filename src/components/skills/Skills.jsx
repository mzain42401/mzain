import React from 'react'
import classes from './skills.module.css'
import { IoLogoJavascript } from 'react-icons/io'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaBootstrap} from 'react-icons/fa'
 


const skills = () => {
  const { skillsSection, skillCeneterDiv, myskill } = classes
  return (
    <>
      <section className={skillsSection}>

        <div className={skillCeneterDiv}>

          <div className={myskill} >
            <FaHtml5 />
          </div>
          <div className={myskill} >
            <FaCss3Alt />
          </div>
          <div className={myskill} >
            <SiTailwindcss />
          </div>
          <div className={myskill} >
            <FaBootstrap />

          </div>
          <div className={myskill} >
          <IoLogoJavascript />
          </div>
          <div className={myskill} >
            <FaReact />
            
          </div>
          <div className={myskill} >
            <TbBrandNextjs />
          </div>
        </div>

      </section>

    </>
  )
}

export default skills
