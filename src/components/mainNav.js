import React from 'react'
import Link from 'gatsby-link'
import TransitionLink from "gatsby-plugin-transition-link"


const MainNav = () => (
  <nav className="nav--main">
    <ul>
        <li>
            <TransitionLink 
                to="/" 
                activeClassName="active-page-link"
                exit={{
                    length: .25
                }}
                entry={{
                    length: .125
                }}
              >
              Home
              </TransitionLink>
        </li>
        <li>
            <TransitionLink 
                to="/work/" 
                activeClassName="active-page-link"
                exit={{
                    length:.25
                }}
                entry={{
                    length: .125
                }}
              >
              Work
              </TransitionLink>
        </li>        
        <li>
            <TransitionLink 
                to="/about/" 
                activeClassName="active-page-link"
                exit={{
                    length:.25
                }}
                entry={{
                    length: .125
                }}
              >
              About
              </TransitionLink>
        </li>
        <li>
            <TransitionLink 
                to="/about" 
                activeClassName="active-page-link"
                exit={{
                    length:.25
                }}
                entry={{
                    length: .125
                }}
              >
              Contact
              </TransitionLink>
        </li>
    </ul>
  </nav>
)

export default MainNav
