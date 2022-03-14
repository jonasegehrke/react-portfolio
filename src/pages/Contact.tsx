import React, { useRef } from 'react'
import NewPageHeading from '../components/NewPageHeading'
import { GiPositionMarker } from 'react-icons/gi'
import { GrMail } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { VscGithub, VscGithubInverted } from 'react-icons/vsc'
import { RiLinkedinBoxFill, RiLinkedinBoxLine } from 'react-icons/ri'


export default function Contact() {

    const githubLineRef = useRef<null | HTMLAnchorElement>(null)
    const githubFillRef = useRef<null | HTMLAnchorElement>(null)
    const linkedinLineRef = useRef<null | HTMLAnchorElement>(null)
    const linkedinFillRef = useRef<null | HTMLAnchorElement>(null)


    function handleHover(isGithub: boolean) {
        if (isGithub) {
            githubLineRef.current?.classList.toggle("hide")
            githubFillRef.current?.classList.toggle("hide")
        } else {
            linkedinLineRef.current?.classList.toggle("hide")
            linkedinFillRef.current?.classList.toggle("hide")
        }

    }

    return (
        <div>
            <section className="contact-section" id="contact">
                <NewPageHeading heading="Contact" />
                <p>Reach me!</p>
                <p className='contact-heading'>I am currently looking for an internship aswell as exciting opportunities</p>
                <div className="contact-container">
                    <div className="contact-info">


                        <div className="contact-item">
                            <IconContext.Provider value={{ className: "contact-icon" }}>
                                <GiPositionMarker />
                            </IconContext.Provider>
                            <span className="contact-info-text">Fredensborggade 6, 4th. 2200 København N</span>

                        </div>
                        <div className="contact-item">
                            <IconContext.Provider value={{ className: "contact-icon" }}>
                                <GrMail />
                            </IconContext.Provider>
                            <span className="contact-info-text">jonasegehrke@gmail.com</span>

                        </div>
                        <div className="contact-item">
                            <IconContext.Provider value={{ className: "contact-icon" }}>
                                <FaPhoneAlt />
                            </IconContext.Provider>
                            <span className="contact-info-text">+45 53 68 07 08</span>
                        </div>
                    </div>

                    <div className="about-links contact-socials">
                            <a className="social-links hide" href="https://github.com/jonasegehrke" ref={githubLineRef} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(true)}><VscGithub /></a>
                            <a className="social-links" href="https://github.com/jonasegehrke" ref={githubFillRef} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(true)}><VscGithubInverted /></a>
                            <a className="social-links linkedin hide" href="https://www.linkedin.com/in/jonas-emil-gehrke/" ref={linkedinLineRef} onMouseEnter={() => handleHover(false)} onMouseLeave={() => handleHover(false)}><RiLinkedinBoxLine /></a>
                            <a className="social-links linkedin" href="https://www.linkedin.com/in/jonas-emil-gehrke/" ref={linkedinFillRef} onMouseEnter={() => handleHover(false)} onMouseLeave={() => handleHover(false)}><RiLinkedinBoxFill /></a>
                        </div>
                </div>
            </section>
        </div>
    )
}
