import React from 'react'
import classes from './projects.module.css'
import Todo from '../../images/mytodos.jpg'
import Developer from '../../images/Blue Illustration Laptop Hello Circle Sticker.png'

const cardarry=[
  {
name:"To-Do APP",
discription:" Digital task manager, allowing users to add tasks, set due dates, prioritize items, mark tasks as completed.",
cardImage:Todo,
github:"https://github.com/mzain42401/todo-web",
preview:"https://mz-todo.vercel.app/"
  },
  {
    name:"Developer Portfolio",
    discription:"It's collection of projects, that showcase a developer's skills, expertise, and experience.",
cardImage:Developer,

    github:"https://github.com/mzain42401/My_Porfolio",
    preview:"https://mzain.vercel.app/"
      }
]


const Projects = () => {
  const { projectSection,container,card,front,back, projectCenterDiv, myProject,  projectTittle, projectDiscription, projectBtnDiv } = classes
  return (
    <>
      <section id='projects' className={projectSection}>
        <h1>My Projects</h1>

        <div className={projectCenterDiv}>
{
  cardarry.map((elment,index)=>{
    return <>

<div className={container}>
            <div className={card}>
              <div className={front}><img src={elment.cardImage}  /></div>
              <div className={back}>
                <div className={myProject}>
                  <div className={projectTittle}>
                    {elment.name}
                  </div>
                  <div className={projectDiscription}>
                   {elment.discription}
                  </div>

                  <div className={projectBtnDiv}>
                    <div > <button><a rel="noreferrer" target='_blank' href={elment.github}>Github</a></button> </div>
                    <div> <button><a rel="noreferrer" target='_blank' href={elment.preview}>Preview</a></button> </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  })
}
          </div>



      </section>
    </>
  )
}


export default Projects



