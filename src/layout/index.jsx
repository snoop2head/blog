import React from 'react'


import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
