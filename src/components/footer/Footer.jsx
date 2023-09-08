import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
    const {footer}=classes
  return (
    <>
      <section className={footer}>
Made by <span>zain ali</span> | <span>2023</span> 
      </section>
    </>
  )
}

export default Footer
