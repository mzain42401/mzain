import React from 'react'
import classes from './btn.module.css'
const CVBtn = ( {btnValue}) => {
    const {btn}=classes
  return (
    <>
      <button className={btn}><a href="CV.pdf" download="cv.pdf"> {btnValue}</a> </button>
    </>
  )
}
export default CVBtn


 export const Btn = ( {btnValue}) => {
  const {btn}=classes
return (
  <>
    <button className={btn}> {btnValue} </button>
  </>
)
}

