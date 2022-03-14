import React from 'react'

type RandomDivProp = {
  className: string
}

export default function RandomMovingDiv({ className } : RandomDivProp) {
  return (
      <div className={className}></div>
  )
}
