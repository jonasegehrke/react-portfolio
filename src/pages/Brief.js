import React from 'react'
import Blob from '../components/Blob'

export default function Brief() {
  return (
    <div>
      <section className='brief-section' id="brief">
            <div className="brief-image">
              <Blob/>
            </div>
            
            <div className="brief-text">
                <h1>Hi, I'm Jonas</h1>
                <h2>Computer Science Student</h2>
                <p>Hardware and software enthusiast, with flair for agile development and web services</p>
            </div>
        </section>
    </div>
  )
}
