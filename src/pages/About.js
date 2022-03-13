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
                            <a href="https://drive.google.com/file/d/1lJsX8FtAoITbxp4ayR99ltp02RNXcoqK/view?usp=sharing">
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
                                <IconContext.Provider value={{ className: "about-icon" }}>
                                    <BsFillPersonFill />
                                </IconContext.Provider>
                                <p>My name is Jonas Emil Gehrke and I am currently located in Copenhagen.
                                    I'm a hard worker with a goal of becoming better and thus gaining new skills at my workplace.
                                    Therefore, I will always strive and challenge myself to do my very best.</p>
                            </div>

                            <div className="about-education">
                                <IconContext.Provider value={{ className: "about-icon" }}>
                                    <IoSchool />
                                </IconContext.Provider>
                                <p>I've always been very fond of the IT world. After my high school graduation, I started on DTU as
                                    an IT-Electronic engineer student but my passion was in code so i dropped out and started on KEA
                                    instead.
                                    I'm currently at my 4th semester on KEA as a computer science student.
                                    Here I have learned a lot about web-services, software development and agile methodology.</p>
                                    
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
