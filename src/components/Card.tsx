import React from 'react'
import { IconContext, IconType } from "react-icons";
import { VscGithubInverted } from 'react-icons/vsc';

type CardProps = {
    title: string,
    text: string,
    href: string,
    icon: JSX.Element
}

export default function Card({title, text, href, icon}:CardProps) {


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
