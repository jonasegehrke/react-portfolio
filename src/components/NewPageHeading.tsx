import React from 'react'

type PageProps = {
  heading: string
}

export default function NewPageHeading({heading} : PageProps) {
  return (
    <div className='new-page'>
      <span className="new-page-heading">{heading}</span>
      <span className="line"></span>
    </div>
  )
}
