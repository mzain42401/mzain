import React from 'react'
import classes from './projects.module.css'
import Image from '../../images/me.png'
import Todo from '../../images/todoweb.png'
import Developer from '../../images/developer.png'



const Projects = () => {
  const { projectSection, projectCenterDiv, myProject, projectImgDiv, projectImg, projectTittle, projectDivider, projectDiscruption, projectBtnDiv } = classes
  return (
    <>
      <section id='projects' className={projectSection}>
        <h1>My Projects</h1>
        <div className={projectCenterDiv}>
          <div className={myProject}>
            <div className={projectImgDiv}>
              <img src={Todo} className={projectImg} alt="" />
            </div>
            <div className={projectTittle}>
             To-Do APP
            </div>
            <div className={projectDiscruption}>
            Digital task manager, allowing users to add tasks, set due dates, prioritize items, mark tasks as completed.
            </div>
            <div className={projectDivider}>

            </div>
            <div className={projectBtnDiv}>
              <div > <button><a rel="noreferrer" href="https://github.com/mzain42401/todo-web" target='_blank'>Github</a></button> </div>
              <div> <button><a rel="noreferrer" href="https://mz-todo.vercel.app/" target='_blank'>Preview</a></button> </div>


            </div>

          </div>

          <div className={myProject}>
            <div className={projectImgDiv}>
              <img src={Developer} className={projectImg} alt="" />
            </div>
            <div className={projectTittle}>
            Developer Portfolio
            </div>
            <div className={projectDiscruption}>
            It's collection of  projects, that showcase a developer's skills, expertise, and experience.
            </div>
            <div className={projectDivider}>

            </div>
            <div className={projectBtnDiv}>
              <div > <button><a rel="noreferrer" href="https://github.com/mzain42401/My_Porfolio" target='_blank'>Github</a></button> </div>
              <div> <button><a rel="noreferrer" href="https://mzain.vercel.app/" target='_blank'>Preview</a></button> </div>


            </div>

          </div>
          <div className={myProject}>
            <div className={projectImgDiv}>
              <img src={Image} className={projectImg} alt="" />
            </div>
            <div className={projectTittle}>
              recaet tofo
            </div>
            <div className={projectDiscruption}>
              akjd jgajjdja jhagjhdgja hjgahdn hvhjdy fdf fgdga vathfdf
            </div>
            <div className={projectDivider}>

            </div>
            <div className={projectBtnDiv}>
              <div > <button><a rel="noreferrer" href="">Github</a></button> </div>
              <div> <button><a rel="noreferrer" href="">Preview</a></button> </div>


            </div>

          </div>
          <div className={myProject}>
            <div className={projectImgDiv}>
              <img src={Image} className={projectImg} alt="" />
            </div>
            <div className={projectTittle}>
              recaet tofo
            </div>
            <div className={projectDiscruption}>
              akjd jgajjdja jhagjhdgja hjgahdn hvhjdy fdf fgdga vathfdf
            </div>
            <div className={projectDivider}>

            </div>
            <div className={projectBtnDiv}>
              <div > <button><a rel="noreferrer" href="">Github</a></button> </div>
              <div> <button><a rel="noreferrer" href="">Preview</a></button> </div>


            </div>

          </div>
          <div className={myProject}>
            <div className={projectImgDiv}>
              <img src={Image} className={projectImg} alt="" />
            </div>
            <div className={projectTittle}>
              recaet tofo
            </div>
            <div className={projectDiscruption}>
              akjd jgajjdja jhagjhdgja hjgahdn hvhjdy fdf fgdga vathfdf
            </div>
            <div className={projectDivider}>

            </div>
            <div className={projectBtnDiv}>
              <div > <button><a rel="noreferrer" href="">Github</a></button> </div>
              <div> <button><a rel='noreferrer' href="">Preview</a></button> </div>


            </div>

          </div>
          
        </div>


      </section>
    </>
  )
}

export default Projects
