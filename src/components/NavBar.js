import React, { useRef } from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IconContext } from "react-icons";

export default function NavBar() {
    const menuButtonRef = useRef()
    let menuOpen = false;

    function handleMenuOpen() {
        if(!menuOpen){
            menuButtonRef.current.classList.add('open');
            menuOpen = !menuOpen
        } else {
            menuButtonRef.current.classList.remove('open');
            menuOpen = !menuOpen
        }
        
    }

    return (
        <div>
            <header class="header" id="header">
                <a href="#" class="logo"><IconContext.Provider value={{ className: "logo-icon" }}><BsFillPersonFill /></IconContext.Provider> Jonas Gehrke</a>
                <nav>
                    <ul class="nav_links">
                        <li><a class="nav-link" href="#home">Home</a></li>
                        <li><a class="nav-link" href="#about">About</a></li>
                        <li><a class="nav-link" href="#projects">Projects</a></li>
                    </ul>
                </nav>
                <a href="#footer" class="cta"><button class="contact-btn"><IconContext.Provider value={{ className: "contact-icon" }}><FiMail /></IconContext.Provider> Contact</button></a>
            </header>


            <header class="header" id="mobile_header">
                <a href="#" class="logo"><IconContext.Provider value={{ className: "logo-icon" }}><BsFillPersonFill /></IconContext.Provider> Jonas Gehrke</a>
                <div onClick={handleMenuOpen} ref={menuButtonRef} className="menu-btn">
                    <div className="menu-btn_burger"></div>
                </div>
                <nav>
                    <ul class="nav_mobile_links" id="nav_mobile_links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
