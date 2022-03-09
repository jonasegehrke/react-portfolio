import React from 'react'
import Blob from '../components/Blob'
import { BsArrowDown } from 'react-icons/bs';

export default function Brief() {
  return (
    <div>
      <section class="brief_section" id="brief">
            <div class="brief_image">
              <Blob/>
            </div>
            
            <div class="brief_text">
                <h1>Hi, I'm Jonas</h1>
                <h2>Computer Science Student</h2>
                <p>Hardware and software enthusiast, with flair for agile development and web services</p>
            </div>
            
            <div class="scroll_indicator">
                <a href="#about" class="cta"><button class="scroll-btn"><BsArrowDown /></button></a>
            </div>
        </section>
    </div>
  )
}
