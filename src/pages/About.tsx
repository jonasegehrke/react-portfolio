import { useRef } from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { RiLinkedinBoxLine, RiLinkedinBoxFill } from 'react-icons/ri';
import { VscGithub, VscGithubInverted } from 'react-icons/vsc';
import { IoSchool } from 'react-icons/io5'
import { IconContext } from "react-icons";
import NewPageHeading from '../components/NewPageHeading';


export default function About() {
    const githubLineRef = useRef<null | HTMLAnchorElement>(null)
    const githubFillRef = useRef<null | HTMLAnchorElement>(null)
    const linkedinLineRef = useRef<null | HTMLAnchorElement>(null)
    const linkedinFillRef = useRef<null | HTMLAnchorElement>(null)

    const downloadSelectRef = useRef<null | HTMLSelectElement>(null);


    function handleHover(isGithub: boolean) {
        if (isGithub) {
            githubLineRef.current?.classList.toggle("hide")
            githubFillRef.current?.classList.toggle("hide")
        } else {
            linkedinLineRef.current?.classList.toggle("hide")
            linkedinFillRef.current?.classList.toggle("hide")
        }
    }

    function handleDownload() {
        let path = downloadSelectRef.current?.value
        if (path === undefined) return;
        window.open(process.env['PUBLIC_URL'] + path, '_blank')?.focus();
        if(downloadSelectRef.current){
            downloadSelectRef.current.selectedIndex = 0
        }
    }

    return (
        <div>
            <section className="about-section" id="about">
                <NewPageHeading heading="About me" />
                <p className='about-heading'>Jonas Emil Gehrke</p>
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
                            <select ref={downloadSelectRef} placeholder="Download CV" onChange={handleDownload} className="download-btn btn">
                                <option selected disabled hidden >Download CV</option>
                                <option value="/Jonas Emil Gehrke CV dark.pdf">Dark CV</option>
                                <option value="/Jonas Emil Gehrke CV light.pdf" className="option">Light CV</option>
                            </select>
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="about-info">
                            <div className="about-person">
                                <IconContext.Provider value={{ className: "about-icon left-margin" }}>
                                    <BsFillPersonFill />
                                </IconContext.Provider>
                                <p> Aspiring web developer with special interest in frontend JavaScript, react.js and TypeScript.
                                    I enjoy being part of full stack projects, both frontend and backend development.
                                    Hobby projects keep me engaged for long coding-sessions and allow me to learn a lot in my spare time. This originates from my belief in lifelong learning and exploring.
                                </p>
                            </div>

                            <div className="about-education">
                                <IconContext.Provider value={{ className: "about-icon left-margin" }}>
                                    <IoSchool />
                                </IconContext.Provider>
                                <p> After my high school graduation, I started on DTU as
                                    an IT-Electronics engineer student. <br />
                                    When I became aware that my passion was in code i withdrew from DTU and started on KEA
                                    as a Computer Science student instead.
                                    I'm at my 4th semester on KEA, currently learning ASP.NET MVC, Node.js, Svelte and Python. <br />
                                </p>
                            </div>
                        </div>

                        <div className="about-skills">


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