import React from 'react'

export default function NewPageHeading({heading, id}) {
  return (
    <div className='new-page' id={id}>
      <span className="new-page-heading">{heading}</span>
      <span className="line"></span>
    </div>
  )
}
