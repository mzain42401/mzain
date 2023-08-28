import React from 'react'
import './button.css'
import { useContext } from 'react'
import AuthContx from '../../context'

const Button = ({tittle}) => {
    const contx= useContext(AuthContx)
  return (
    <>
      <button onClick={contx.islogIn?contx.onlogOut:contx.onlogIn}   className='myBtn'>{tittle}</button>
    </>
  )
}

export default Button
