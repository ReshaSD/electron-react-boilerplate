import React, { FC } from 'react'
import logo from './logo.svg'
import classes from './hello-web.module.css'

type THelloProps = {}


export const HelloWeb: FC<THelloProps> = (props) => {
  return (
    <header className={classes['App-header']}>
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
