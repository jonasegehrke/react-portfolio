import React from 'react'
import NewPageHeading from '../components/NewPageHeading'
import { GiPositionMarker } from 'react-icons/gi'
import { GrMail } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'
import { IconContext } from "react-icons";


export default function Contact() {

    return (
        <div>
            <section className="contact-section">
                <NewPageHeading heading="Contact" id="contact" />
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
                </div>
            </section>
        </div>
    )
}
