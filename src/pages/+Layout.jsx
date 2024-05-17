export { Layout }

import React from 'react'
import './Layout.css'

function Layout({ children }) {
  return (
    <React.StrictMode>
      <Navigation>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </Navigation>
      <Content>{children}</Content>
    </React.StrictMode>
  )
}

function Navigation({ children }) {
  return (
    <div
      style={{
        paddingBottom: 25,
        paddingTop: 5,
        fontSize: '1.2em',
        display: 'flex',
        justifyContent: 'center',
        gap: 25,
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }) {
  return <div>{children}</div>
}
