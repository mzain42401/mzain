import React from 'react'
import { Bars } from 'react-loader-spinner'
import classes from './loading.module.css'
const Loding = () => {
    const {loaderDiv}=classes
  return (
    <>
    <div className={loaderDiv}>
    <Bars
  height="80"
  width="80"
  color="#e0a80d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
<h1><span>&lt;</span> zain ali <span>/&gt;</span> </h1>
    </div>
     
    </>
  )
}

export default Loding
