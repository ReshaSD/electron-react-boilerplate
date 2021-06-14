import React, { FC, useEffect, useState } from 'react'
import icon from './icon.svg'

type THelloProps = {}


export const Hello: FC<THelloProps> = (props) => {
  const [testText, setText] = useState('')
  useEffect(() => {
    setText(window.location.origin)
  })

  return (
    <div>
      <div>location.origin: {testText}</div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
    </div>
  )
}
