import React from 'react'
import classes from './projects.module.css'
import Todo from '../../images/mytodos.jpg'
import Developer from '../../images/Blue Illustration Laptop Hello Circle Sticker.png'
import Quiz from '../../images/quiz.jpg'
import calculator from '../../images/calculator.jpg';
import shoping from '../../images/shoping.png';
import landing from '../../images/landing.jpg';




const cardarry = [
  {
    name: "E-commerce Store",
    discription: "Build a successful e-commerce store by strategically selecting a niche and optimizing user experience.",
    cardImage: shoping,
    preview: "https://ecommerce-kappa-coral.vercel.app/"
  },
  {
    name: "Quiz App",
    discription: "Designed for testing and enhancing knowledge through interactive quizzes and trivia questions.",
    cardImage: Quiz,
    preview: "https://quiz-lyart-xi.vercel.app/"
  },
  {
    name: "Landing Page",
    discription: "Targeted webpage with a concise headline, compelling visuals, persuasive copy, and a prominent call-to-action, designed to convert visitors and optimize user experience.",
    cardImage: landing,
    preview: "https://mzain42401.github.io/landingpage/"
  },
  {
    name: "To-Do APP",
    discription: " Digital task manager, allowing users to add tasks, set due dates, prioritize items, mark tasks as completed.",
    cardImage: Todo,
    
    preview: "https://react-todo-zeta-two.vercel.app/"
  },
  {
    name: "Developer Portfolio",
    discription: "It's collection of projects, that showcase a developer's skills, expertise, and experience.",
    cardImage: Developer,

    
    preview: "https://mzain.vercel.app/"
  },
  {
    name: "React Calculator",
    discription: "Perform complex mathematical calculations with ease using this powerful calculator.",
    cardImage: calculator,
    preview: "https://react-calculator-ebon-omega.vercel.app/"
  },
  
]


const Projects = () => {
  const { projectSection, container, card, front, back, projectCenterDiv, myProject, projectTittle, projectDiscription, projectBtnDiv } = classes
  return (
    <>
      <section id='projects' className={projectSection}>
        <h1>My Projects</h1>

                    <div className={projectCenterDiv}>
          {
            cardarry.map((elment, index) => {
              return <>

                <div className={container}>
                  <div className={card}>
                    <div className={front}><img src={elment.cardImage} /></div>
                    <div className={back}>
                      <div className={myProject}>
                        <div className={projectTittle}>
                          {elment.name}
                        </div>
                        <div className={projectDiscription}>
                          {elment.discription}
                        </div>

                        <div className={projectBtnDiv}>
                          
                          <div>
                            <button><a rel="noreferrer" target='_blank' href={elment.preview}>Preview</a></button>
                          </div>


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



