import React from 'react'
import { BsGithub, BsLinkedin, BsFillCloudDownloadFill } from 'react-icons/bs';
import { IconContext } from "react-icons";


export default function About() {
    return (
        <div>
            <section className="about-section" id="about">
                <div className="about-container">
                    <div className='spacer'></div>
                <div>
                        <div className="about-links">
                            <a className="social-links" href="https://github.com/jonasegehrke"><BsGithub /></a>
                            <a className="social-links" href="https://www.linkedin.com/in/jonas-emil-gehrke/"><BsLinkedin /></a>
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
                        <p>
                            My name is Jonas Emil Gehrke and I am currently located in Copenhagen.
                            I'm a hard worker with a goal of becoming better and thus gaining new skills at my workplace.
                            Therefore, I will always strive and challenge myself to do my very best.<br /> <br />
                            I've always been very fond of the IT world. After my high school graduation, I started on DTU as
                            an IT-Electronic engineer student but my passion was in code so i dropped out and started on KEA
                            instead.
                            I'm currently at my 3rd semester on KEA as a computer science student.
                            Here I have learned a lot about web-services, software development and agile methodology.
                            I have knowledge about Linux, Azure, Tomcat and much more.
                        </p>
                    </div>
                    <div className='spacer'></div>
                    
                </div>
            </section>
        </div>
    )
}
