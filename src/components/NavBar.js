import React, { useRef, useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { IconContext } from "react-icons";


export default function NavBar({ setStickyPage }) {
    const [isBigScreen, setIsBigScreen] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const menuButtonRef = useRef()
    const navLinksRef = useRef()
    const navBarRef = useRef();

    let scrollAllowed = true;



    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        if (!scrollAllowed) return
        if (menuOpen) return


        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            navBarRef.current.classList.add('show')
            navBarRef.current.classList.remove('hide')
        } else {
            navBarRef.current.classList.remove('show')
            navBarRef.current.classList.add('hide')
        }
        prevScrollpos = currentScrollPos;


        scrollAllowed = false;

        setTimeout(function () {
            scrollAllowed = true;
        }, 100)
    }







    function handleMenuOpen() {
        menuButtonRef.current.classList.toggle('open');
        navLinksRef.current.classList.toggle('open');
        setStickyPage()
        setIsBigScreen(false)
        navBarRef.current.classList.add('show')
        navBarRef.current.classList.remove('hide')

        if (menuOpen) {
            setMenuOpen(false)

            return
        }
        setMenuOpen(true)
    }

    function handleRedirect() {
        navLinksRef.current.classList.add('close-fast')
        menuButtonRef.current.classList.toggle('open');
        navLinksRef.current.classList.toggle('open');
        setMenuOpen(false)

        if (!isBigScreen) setStickyPage()
        setTimeout(function () {
            navLinksRef.current.classList.remove('close-fast')
        }, 100);

    }


    return (
        <div ref={navBarRef} className='nav-bar'>
            <header className="header" id="header">
                <nav>
                    <div className="logo">
                        <a href="#brief" className="logo-anchor"><IconContext.Provider value={{ className: "logo-icon" }}><BsFillPersonFill /></IconContext.Provider> Jonas Gehrke</a>
                    </div>
                    <div onClick={handleMenuOpen} ref={menuButtonRef} className="menu-btn">
                        <div className="menu-btn_burger"></div>
                    </div>
                    <ul className="nav_links" ref={navLinksRef}>
                        <li className="nav-item"><a className="nav-anchor" href="#brief" onClick={handleRedirect}>Home</a></li>
                        <li className="nav-item"><a className="nav-anchor" href="#about" onClick={handleRedirect}>About</a></li>
                        <li className="nav-item"><a className="nav-anchor" href="#projects" onClick={handleRedirect}>Projects</a></li>
                        <li className="nav-item"><a className="nav-anchor" href="#contact" onClick={handleRedirect}>Contact</a></li>
                        <li className="nav-item"><a className="nav-anchor"></a></li>
                    </ul>
                </nav>
                <div className='behind-white-line'>
                    <div className="white-line"></div>
                </div>
            </header>
        </div>
    )
}


