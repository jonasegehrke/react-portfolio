import React from 'react'
import { BsArrowDown, BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';

export default function About() {
    return (
        <>
            <section class="about_section" id="about">
                <div>
                    <div class="about_text">
                        <h3>About me</h3>
                        <p>
                            My name is Jonas Emil Gehrke and I am currently located in Copenhagen.
                            I'm a hard worker with a goal of becoming better and thus gaining new skills at my workplace.
                            Therefore, I will always strive and challenge myself to do my very best.<br/>
                            I've always been very fond of the IT world. After my high school graduation, I started on DTU as
                            an IT-Electronic engineer student but my passion was in code so i dropped out and started on KEA
                            instead.
                            I'm currently at my 3rd semester on KEA as a computer science student.
                            Here I have learned a lot about web-services, software development and agile methodology.
                            I have knowledge about Linux, Azure, Tomcat and much more.
                        </p>
                    </div>

                    <div class="about_text"> 
                    </div>

                </div>
                <div>
                    <div class="about_image">
                        <img src="images/aboutProfile.jpg" alt="" class="profile_image"/>
                    </div>
                    <div class="about_links">
                        <a class="uil" href="https://github.com/jonasegehrke"><BsGithub /></a>
                        <a class="uil" href="https://www.linkedin.com/in/jonas-emil-gehrke/"><BsLinkedin /></a>
                        <a class="uil" href="https://www.facebook.com/jonas.gehrke/"><BsFacebook /></a>
                    </div>
                    <div class="about_download">
                        <a href="https://drive.google.com/file/d/1lJsX8FtAoITbxp4ayR99ltp02RNXcoqK/view?usp=sharing"><button class="download_cv_btn uil uil-file-search-alt"> CV</button></a>
                    </div>
                </div>
                <div class="scroll_indicator">
                    <a href="#projects" class="cta"><button class="scroll-btn"><BsArrowDown /></button></a>
                </div>
            </section>
        </>
    )
}
