import React from 'react'
import classes from './btn.module.css'



  const Btn = ( {btnValue}) => {
  const {btn}=classes
return (
  <>
    <button className={btn}> {btnValue}  </button>
  </>
)
}

export default Btn

