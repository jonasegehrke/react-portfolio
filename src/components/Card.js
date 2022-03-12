import React from 'react'
import { IconContext } from "react-icons";
import { VscGithubInverted } from 'react-icons/vsc';

export default function Card({ title, text, href, icon }) {


    return (
        <div className="project-card">
            <IconContext.Provider value={{ className: 'card-icon' }}>
                {icon}
            </IconContext.Provider>
            
            <h3>{title}</h3>
            <span className="card-text">{text}</span>
            <a href={href} className="card-link">
                <IconContext.Provider value={{ className: "card-link-icon" }}>
                    <VscGithubInverted />
                </IconContext.Provider>
                Link to Repository
            </a>
        </div>
    )
}
