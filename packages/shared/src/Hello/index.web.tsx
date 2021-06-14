import React, { FC, useEffect, useState } from 'react'
import classes from './hello-web.module.scss'
import logo from './logo.svg'


type THelloProps = {}


export const Hello: FC<THelloProps> = (props) => {
  const [testText, setText] = useState('')
  useEffect(() => {
    setText(window.location.origin)
  })

  return (
    <header className={classes['App-header']}>
      <span>location.origin: { testText }</span>
      <img src={logo} className={classes['App-logo']} alt="logo" />
      <p>
        Edit <code>packages/app-web/src/App.tsx</code> and save to reload.
      </p>
      <a
        className={classes['App-link']}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}
