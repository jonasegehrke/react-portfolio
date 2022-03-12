import React, { useRef } from 'react'
import NewPageHeading from '../components/NewPageHeading'
import { GiPositionMarker } from 'react-icons/gi'
import { GrMail } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'
import sendmail from 'sendmail'

export default function Contact() {
    
    const nameRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    function handleSendMail(){
        sendmail({
            from: nameRef.current.value,
            to: 'jonasegehrke@gmail.com',
            subject: subjectRef.current.value,
            html: messageRef.current.value,
        }, function(err, reply){
            console.log(err && err.stack)
            console.log(reply)
        })

    }


    return (
        <div>
            <section className="contact-section">
                <NewPageHeading heading="Contact" id="contact" />
                <p>Contact me</p>
                <p>I am currently looking for an internship as a frontend developer</p>
                <div className="contact-container">
                    <div className="contact-info">
                        <GiPositionMarker /> <span className="contact-info-text">Fredensborggade 6, 4th. 2200 København N</span>
                        <GrMail /> <span className="contact-info-text">jonasegehrke@gmail.com</span>
                        <FaPhoneAlt /> <span className="contact-info-text">+45 53 68 07 08</span>
                    </div>
                    <div className="contact-form">
                        <form action="submit">
                            <input ref={nameRef} type="text" placeholder='Name' />
                            <input ref={emailRef} type="email" placeholder='Email' />
                            <input ref={subjectRef} type="text" placeholder='Subject' />
                            <input ref={messageRef} type="text" placeholder='Message'/>
                        </form>
                    </div>


                </div>
                <button type='submit' onClick={handleSendMail}>Submit</button>
            </section>
        </div>
    )
}
