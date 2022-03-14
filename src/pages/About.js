import React, { useRef } from 'react'
import { BsFillCloudDownloadFill, BsFillPersonFill } from 'react-icons/bs';
import { RiLinkedinBoxLine, RiLinkedinBoxFill } from 'react-icons/ri';
import { VscGithub, VscGithubInverted } from 'react-icons/vsc';
import { IoSchool, IoCodeSharp } from 'react-icons/io5'
import { IconContext } from "react-icons";
import NewPageHeading from '../components/NewPageHeading';


export default function About() {
    const githubLineRef = useRef()
    const githubFillRef = useRef()
    const linkedinLineRef = useRef();
    const linkedinFillRef = useRef();


    function handleHover(isGithub) {
        if (isGithub) {
            githubLineRef.current.classList.toggle("hide")
            githubFillRef.current.classList.toggle("hide")
        } else {
            linkedinLineRef.current.classList.toggle("hide")
            linkedinFillRef.current.classList.toggle("hide")
        }

    }

    return (
        <div>
            <section className="about-section" id="about">
                <NewPageHeading heading="About me" />
                <p className='about-heading'>Aspiring Web-developer</p>
                <div className="about-container">
                    <div className='spacer'></div>
                    <div>
                        <div className="about-links">
                            <a className="social-links hide" href="https://github.com/jonasegehrke" ref={githubLineRef} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(true)}><VscGithub /></a>
                            <a className="social-links" href="https://github.com/jonasegehrke" ref={githubFillRef} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(true)}><VscGithubInverted /></a>
                            <a className="social-links linkedin hide" href="https://www.linkedin.com/in/jonas-emil-gehrke/" ref={linkedinLineRef} onMouseEnter={() => handleHover(false)} onMouseLeave={() => handleHover(false)}><RiLinkedinBoxLine /></a>
                            <a className="social-links linkedin" href="https://www.linkedin.com/in/jonas-emil-gehrke/" ref={linkedinFillRef} onMouseEnter={() => handleHover(false)} onMouseLeave={() => handleHover(false)}><RiLinkedinBoxFill /></a>
                        </div>
                        <div className="about-download">
                            <a href={process.env.PUBLIC_URL + '/cv.pdf'} download>
                                <button className="download-btn btn">
                                    <IconContext.Provider value={{ className: "download-icon" }}>
                                        <BsFillCloudDownloadFill />
                                    </IconContext.Provider>
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-info">
                            <div className="about-person">
                                <IconContext.Provider value={{ className: "about-icon left-margin" }}>
                                    <BsFillPersonFill />
                                </IconContext.Provider>
                                <p>My name is Jonas Emil Gehrke and I am currently located in Copenhagen.
                                    I'm a hard worker with a goal of becoming better and thus gaining new skills at my workplace.
                                    I have experience with full stack development and I've gained a passion for frontend web development. 
                                </p>
                            </div>

                            <div className="about-education">
                                <IconContext.Provider value={{ className: "about-icon left-margin" }}>
                                    <IoSchool />
                                </IconContext.Provider>
                                <p> After my high school graduation, I started on DTU as
                                    an IT-Electronic engineer student. <br /> 
                                    When I became aware that my passion was in code i withdrew from DTU and started on KEA
                                    as a Computer Science student instead.
                                    I'm at my 4th semester on KEA learning ASP.NET MVC, Node.js and Python. <br />
                                    Hobby projects keeps me engaged for long coding-sessions and lots of learning.
                                    This originates from my belief in life long learning and I'm constantly exploring new technologies.
                                    </p>

                            </div>
                        </div>

                        <div className="about-skills">
                            <IconContext.Provider value={{ className: "about-icon" }}>
                                <IoCodeSharp />
                            </IconContext.Provider>

                    
                            <div className="skill-tree">
                            
                                <ul className='directory'>
                                    <li className='root directory-item folder'>skills
                                    </li>
                                    <li className='directory-item folder'>frontend
                                        <ul className='directory'>
                                            <li className='directory-item'>HTML</li>
                                            <li className='directory-item'>CSS</li>
                                            <li className='directory-item'>JavaScript</li>
                                            <li className='directory-item'>TypeScript</li>
                                            <li className='directory-item'>Svelte</li>
                                            <li className='directory-item'>React.js</li>
                                        </ul>
                                    </li>
                                    <li className='directory-item folder'>backend
                                        <ul className='directory'>
                                            <li className='directory-item'>Node.js</li>
                                            <li className='directory-item'>Java Spring</li>
                                            <li className='directory-item'>ASP.NET MVC</li>
                                        </ul>
                                    </li>
                                    <li className='directory-item folder'>cloud
                                        <ul className='directory'>
                                            <li className='directory-item'>AWS</li>
                                            <li className='directory-item'>Microsoft Azure</li>
                                        </ul>
                                    </li>

                                    <li className='directory-item folder'>misc
                                        <ul className='directory'>
                                            <li className='directory-item'>Python</li>
                                            <li className='directory-item'>Linux</li>
                                            <li className='directory-item'>MySQL</li>
                                            <li className='directory-item'>C++</li>
                                            <li className='directory-item'>C</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>


                        </div>

                    </div>
                    <div className='spacer'></div>

                </div>
            </section>
        </div>
    )
}
