import React from 'react'
import Link from 'gatsby-link'

const MainNav = () => (
  <nav className="nav--main">
    <ul>
        <li>
            <Link to="/" activeClassName="active-page-link">Home</Link>
        </li>
        <li>
            <Link to="/work/" activeClassName="active-page-link">Work</Link>
        </li>
        <li>
            <Link to="/about/" activeClassName="active-page-link">About</Link>
        </li>
        <li>
            <Link to="/about/" activeClassName="active-page-link">Contact</Link>
        </li>
    </ul>
  </nav>
)

export default MainNav
