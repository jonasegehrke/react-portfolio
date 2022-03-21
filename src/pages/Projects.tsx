import Card from '../components/Card'
import NewPageHeading from '../components/NewPageHeading'
import { FaNodeJs, FaDiscord } from 'react-icons/fa'
import { BsFileEarmarkPerson, BsSpotify } from 'react-icons/bs'


export default function Projects() {
    return (
        <div>
            <section className="projects-section" id="projects">
                <NewPageHeading heading="Projects" />
                <p>A few projects</p>
                <div className="projects-container">
                    <Card title={"Node Notes"} text={"Collection of notes from elective on my education. SSR (Server Side Rendered) web app with express."} href={'https://github.com/jonasegehrke/Node_Mandatory_1'} icon={<FaNodeJs />} />
                    <Card title={"Portfolio"} text={"This is the web app you are currently on. It is one of my first large projects using react.js & TypeScript."} href={'https://github.com/jonasegehrke/react-portfolio'} icon={<BsFileEarmarkPerson />} />
                    <Card title={"Discord Bot"} text={"discord.js bot fetching stats from game 'Warzone'. Using a backend for live-stat change announcements."} href={'https://github.com/jonasegehrke/WarzoneStatsBot'} icon={<FaDiscord />} />
                    <Card title={"Spotify Clone"} text={"Next js Web app, created using Middleware, Spotify API, Tailwind, NextAuth & Recoil"} href={'https://github.com/jonasegehrke/spotify-clone'} icon={<BsSpotify />} />
                </div>
            </section>
        </div>
    )
}