import React from 'react'
import classes from './contact.module.css'
import Btn from '../Btn/Btn'
import {FaUserAlt,FaPhoneAlt,FaLocationArrow,FaRegEnvelope} from 'react-icons/fa'
const Contact = () => {
  // const { contactSection, contactCenterDiv, contactFormDiv, contactAddress, nameEmailDiv, subjectDiv,emailDiv,nameDiv } = classes
  const {contact,maxWidth,title,contactContent,column ,text,left,icons,info,row,head,subTitle,fields,field ,name,right,email,textarea,buttonArea}=classes
  const formSubmited=(e)=>{
e.preventDefault()
    alert("zain")
  }
  return (
    <>
      <section className={contact} id="contact">
        
        <div className={maxWidth}>
            <h2 className={title}>Contact me</h2>
            
            <div className={contactContent}>
                <div className={`${column} ${left}`} >
                    

                    <div className={icons}>
                        <div className={row}>
                          <span>

                            <FaUserAlt/>
                          </span>
                            <div className={info}>
                                <div className={head}>Name</div>
                                <div className={subTitle}>MUHAMMAD ZAIN ALI</div>
                            </div>
                        </div>
                        <div className={row}>
                          <span>

                            <FaPhoneAlt/>
                          </span>
                            <div className={info}>
                                <div className={head}>Phone</div>
                                <div className={subTitle}>+92 318 2660 793</div>
                            </div>
                        </div>
                        <div className={row}>
                           <span>

                           <FaLocationArrow/>
                           </span>
                            <div className={info}>
                                <div className={head}>Location</div>
                                <div className={subTitle}>DHA Phase 2, Karachi, Pakistan</div>
                            </div>
                        </div>
                        <div className={row}>
                            <span>
                            <FaRegEnvelope/>

                            </span>
                            <div className={info}>
                                <div className={head}>Email</div>
                                <div className={subTitle}>mzain42401@gmail.com</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={`${column} ${right}`}>
                    <div className={text}>Message me</div>
                    <form onSubmit={formSubmited} >
                        <div className={fields}>
                            <div className={`${field} ${name}`}>
                                <input type="text" placeholder="Name" id="Name" required/>
                            </div>
                            <div className={`${field} ${email}`}>
                                <input type="email" placeholder="Email" id="Email" required/>
                            </div>
                        </div>
                        <div className={field}>
                            <input type="text" placeholder="Subject" id="Subject" required/>
                        </div>
                        <div className={`${field} ${textarea}`}>
                            <textarea cols="30" rows="10" placeholder="Message.." id="Msj" required></textarea>
                        </div>
                        <div className={buttonArea}>
                            <button type='submit' id="msjBtn" ty >Send message</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Contact




















{/* <section id='contact' className={contactSection}>
        <h1>Contact</h1>
        <div className={contactCenterDiv}>
          <div className={contactFormDiv}>
            <div className={nameEmailDiv}>
              
              <div className={nameDiv}><input type="text" placeholder='Name' required /></div>
              
              <div className={emailDiv}><input type="email" placeholder='Email' required /></div>
               </div>
            <div className={subjectDiv}><input type="text" placeholder='Subject' required /></div>
            <div><textarea placeholder='Message' cols="30" rows="10"></textarea></div>
            <div><Btn btnValue={"Send Now!"} /></div>
          </div>
          <div className={contactAddress}>

          </div>

        </div>
      </section> */}