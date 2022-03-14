import React from 'react'
import Card from '../components/Card'
import NewPageHeading from '../components/NewPageHeading'
import { FaNodeJs, FaDiscord } from 'react-icons/fa'
import { MdOutlineCoronavirus, MdLocalMovies } from 'react-icons/md'
import { BsFileEarmarkPerson } from 'react-icons/bs'



export default function Projects() {
    return (
        <div>
            <section className="projects-section" id="projects">
                <NewPageHeading heading="Projects"  />
                <p>A few projects</p>
                <div className="projects-container">
                    <Card title={"Node Notes"} text={"SSR (Server Side Rendered) web app with express. Collection of notes from elective on my education."} href={'https://github.com/jonasegehrke/Node_Mandatory_1'} icon={<FaNodeJs/>}/>
                    <Card title={"Portfolio"} text={"This is the web app you are currently on. It is one of my first large projects using react."} href={'https://github.com/jonasegehrke/react-portfolio'} icon={<BsFileEarmarkPerson/>}/>
                    <Card title={"Discord Bot"} text={"discord.js bot fetching stats from game 'Warzone'. Using a backend for live-stat change announcements."} href={'https://github.com/jonasegehrke/WarzoneStatsBot'} icon={<FaDiscord/>}/>
                    <Card title={"Cinema Administration"} text={"Web app created with Java Spring & static frontend. Full CRUD for movie-screenings, ticket sales & kiosk sales."} href={'https://github.com/jonasegehrke/KinoXP'} icon={<MdLocalMovies/>}/>
                </div>
            </section>
        </div>
    )
}
