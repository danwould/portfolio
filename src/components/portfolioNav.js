import React from 'react'
import Link from 'gatsby-link'
import TransitionLink from "gatsby-plugin-transition-link"

const PortfolioNav = () => (
  <aside className="nav--portfolio">
      <ul>
          <li>
              <TransitionLink 
                to="/work/deltaco/" 
                activeClassName="active-page-link"
                exit={{
                    length: .25
                }}
                entry={{
                    length: .125
                }}
              >
                Del Taco
              </TransitionLink>
          </li>
          <li>
              <TransitionLink 
                to="/work/zenpop/" 
                activeClassName="active-page-link"
                exit={{
                    length: .25
                }}
                entry={{
                    length: .125
                }}
              >
                ZenPop
              </TransitionLink>
          </li>
          <li>
              <TransitionLink 
                to="/work/apple/" 
                activeClassName="active-page-link"
                exit={{
                    length: .25
                }}
                entry={{
                    length: .125
                }}
              >
                Apple
              </TransitionLink>
          </li>
          <li>
              <TransitionLink 
                to="/work/sprokkit/"
                activeClassName="active-page-link"
                exit={{
                    length: .25
                }}
                entry={{
                    length: .125
                }}
              >
                Sprokkit
              </TransitionLink>
          </li>
          <li>
              <TransitionLink 
                to="/work/deltaco/"
                activeClassName="active-page-link"
                exit={{
                    length: .25
                }}
                entry={{
                    length: .125
                }}
              >
                Pawn Creative
              </TransitionLink>
          </li>
          <li>
              <TransitionLink 
                to="/work/zenpop/"
                activeClassName="active-page-link"
                exit={{
                    length: .25
                }}
                entry={{
                    length: .125
                }}
              >
                Misc
              </TransitionLink>
          </li>
      </ul>
  </aside>
)

export default PortfolioNav
