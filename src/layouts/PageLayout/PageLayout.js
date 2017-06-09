import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Bad UX</h1>
    <h5>
      Based on <a href='https://github.com/davezuko/react-redux-starter-kit'
        target='_blank'>react-redux-starter-kit</a>
    </h5>
    <h5>Inspired by <a href='http://reddit.com/r/programmerhumor'
      target='_blank'>reddit/r/programmerhumor</a>
    </h5>
    <br />
    <Link to='/' activeClassName='page-layout__nav-item--active'>
      Home
    </Link>
    {' · '}
    <Link to='/volume-controls' activeClassName='page-layout__nav-item--active'>
      Volume Controls
    </Link>
    {' · '}
      Next Thing
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
