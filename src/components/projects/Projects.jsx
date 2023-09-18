import React from 'react'
import classes from './projects.module.css'
import Todo from '../../images/mytodos.jpg'
import Developer from '../../images/Blue Illustration Laptop Hello Circle Sticker.png'
import Quiz from '../../images/quiz.jpg'
import calculator from '../../images/calculator.jpg';


const cardarry=[
  {
name:"To-Do APP",
discription:" Digital task manager, allowing users to add tasks, set due dates, prioritize items, mark tasks as completed.",
cardImage:Todo,
github:"https://github.com/mzain42401/reactTodo",
preview:"https://react-todo-zeta-two.vercel.app/"
  },
  {
    name:"Developer Portfolio",
    discription:"It's collection of projects, that showcase a developer's skills, expertise, and experience.",
cardImage:Developer,

    github:"https://github.com/mzain42401/My_Porfolio",
    preview:"https://mzain.vercel.app/"
      },
      {
        name:"Quiz App",
        discription:"Designed for testing and enhancing knowledge through interactive quizzes and trivia questions.",
    cardImage:Quiz,
    
        github:"https://github.com/mzain42401/quiztest",
        preview:"https://quiz-lyart-xi.vercel.app/"
          },
          ,
          {
        name:"React Calculator",
        discription:"Perform complex mathematical calculations with ease using this powerful calculator.",
    cardImage:calculator,
    
        github:"https://github.com/mzain42401/react-calculator",
        preview:"https://react-calculator-ebon-omega.vercel.app/"
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



