import React from 'react'
import Link from 'gatsby-link'

const PortfolioNav = () => (
  <nav className="nav--sibling">
      <ul>
          <li>
              <div className="arrow">&#8701;</div>
              <Link to="/work/deltaco/" activeClassName="prev-page-link">Del Taco</Link>
          </li>
          <li>
              <div className="arrow">&#8702;</div>
              <Link to="/work/zenpop/" activeClassName="next-page-link">ZenPop</Link>
          </li>
      </ul>
  </nav>
)

export default PortfolioNav
