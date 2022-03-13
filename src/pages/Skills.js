import React, { useRef, useState } from 'react'
import NewPageHeading from '../components/NewPageHeading'

const HTMLCSS = "I have alot of experience with frontend HTML & CSS. I've made countless web apps and static websites as hobby projects."
const JAVASCRIPT = "My favourite language. Frontend development in javascript has endless possibilities. I seek to learn new js frameworks as much as I can."
const NODEJS = "Ive used Node for most of my projects. I have experience with express, react, svelte and much more."
const REACTJS = "Currently I strive to learn reactjs. I'm coding on hobby projects everyday to expand my knowledge in react. I follow a course on pluralsight to maintain a learning process."
const SVELTE = "Besides reactjs I'm currently learning svelte in school. I learn alot from both frameworks, that I can use to excel in both of them."
const PYTHON = "Python is another one of my current electives in school. As I love frontend developing I have a hard time creating hobby projects in python."
const JAVASPRING = "I have used Java Spring for creating a backend REST api with a connected SQL database. I have used JPA to access and manage data between Java object and database."
const DOTNET = "Current elective of mine. I'm doing a full stack project this semester creating a fully functional web app called cbsStudents."
const MYSQL = "I've gained alot of experience with MySQL. I've used local SQL databases aswell as databases from cloud services."
const CLOUD = "I've hosted plenty of web apps, discord bots and much more on cloud services. I've gained experience with Microsoft Azure & Amazon Web Services."
const LINUX = "Ever since I started study on DTU I've had my own Linux server to play with. I've hosted plenty of hobby projects on the server."
const CPLUS ="I gained a bit of experience with C++ & C from my semesters at DTU. In C ive created software for my Arduino smartwatch component. In C++ I only have basic knowledge, as the teachings was never in depth."
export default function Skills() {

    const [currentHighlight, setCurrentHighlight] = useState()

    const hiddenSkillRef = useRef();

    function handleShowDetails(skillText) {
        hiddenSkillRef.current.classList.toggle('highlight-skill')
        hiddenSkillRef.current.classList.toggle('hidden-skill')

        if(typeof skillText != 'string') return

        setCurrentHighlight(skillText)
    }

  return (
    <div>
      <section className="skills-section" id="skills">
      <NewPageHeading heading="Skills" />
      <p className='skills-heading'>Interract with each skill to learn more</p>
                <div className="skills-container">
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(HTMLCSS)} onMouseLeave={handleShowDetails}>HTML & CSS</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(JAVASCRIPT)} onMouseLeave={handleShowDetails}>JavaScript</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(NODEJS)} onMouseLeave={handleShowDetails}>Node.js </span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(REACTJS)} onMouseLeave={handleShowDetails}>React.js</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(SVELTE)} onMouseLeave={handleShowDetails}>Svelte</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(PYTHON)} onMouseLeave={handleShowDetails}>Python</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(CPLUS)} onMouseLeave={handleShowDetails}>C++ & C</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(JAVASPRING)} onMouseLeave={handleShowDetails}>Java Spring</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(DOTNET)} onMouseLeave={handleShowDetails}>ASP.NET MVC</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(MYSQL)} onMouseLeave={handleShowDetails}>MySql</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(CLOUD)} onMouseLeave={handleShowDetails}>Cloud Services</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(LINUX)} onMouseLeave={handleShowDetails}>Linux</span>

                    
                </div>
                <p ref={hiddenSkillRef} className='hidden-skill'>{currentHighlight}</p>
            </section>
    </div>
  )
}
