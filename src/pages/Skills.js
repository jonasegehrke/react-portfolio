import React, { useRef, useState } from 'react'

const HTMLCSS = "CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once."
const JAVASCRIPT = "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
const NODEJS = "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind."
const REACTJS = "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components."
const SVELTE = "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app."
const PYTHON = "Python is a popular programming language. Python can be used on a server to create web applications."
const JAVASPRING = "What is spring used for Java?The Spring Framework (Spring) is an open-source application framework that provides infrastructure support for developing Java applications. One of the most popular Java Enterprise Edition (Java EE) frameworks, Spring helps developers create high performing applications using plain old Java objects (POJOs)."
const DOTNET = "MVC is a design pattern used to decouple user-interface (view), data (model), and application logic (controller). This pattern helps to achieve separation of concerns."
const MYSQL = "SQL is a standard language for storing, manipulating and retrieving data in databases. Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems."

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
                <div className="skills-container">
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(HTMLCSS)} onMouseLeave={handleShowDetails}>HTML & CSS</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(JAVASCRIPT)} onMouseLeave={handleShowDetails}>JavaScript</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(NODEJS)} onMouseLeave={handleShowDetails}>Node.js </span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(REACTJS)} onMouseLeave={handleShowDetails}>React.js</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(SVELTE)} onMouseLeave={handleShowDetails}>Svelte</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(PYTHON)} onMouseLeave={handleShowDetails}>Python</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(JAVASPRING)} onMouseLeave={handleShowDetails}>Java Spring</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(DOTNET)} onMouseLeave={handleShowDetails}>ASP.NET MVC</span>
                    <span className="skills-item" onMouseEnter={()=>handleShowDetails(MYSQL)} onMouseLeave={handleShowDetails}>MySql</span>

                    
                </div>
                <p ref={hiddenSkillRef} className='hidden-skill'>{currentHighlight}</p>
            </section>
    </div>
  )
}
