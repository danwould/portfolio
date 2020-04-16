import React from 'react'
import Link from 'gatsby-link'

const PortfolioNav = () => (
  <aside className="nav--portfolio">
      <ul>
          <li>
              <Link to="/work/deltaco/" activeClassName="active-page-link">Del Taco</Link>
          </li>
          <li>
              <Link to="/work/zenpop/" activeClassName="active-page-link">ZenPop</Link>
          </li>
          <li>
              <Link to="/work/apple/" activeClassName="active-page-link">Apple</Link>
          </li>
          <li>
              <Link to="/work/sprokkit/" activeClassName="active-page-link">Sprokkit</Link>
          </li>
          <li>
              <Link to="/work/deltaco/" activeClassName="active-page-link">Item 5</Link>
          </li>
          <li>
              <Link to="/work/zenpop/" activeClassName="active-page-link">Item 6</Link>
          </li>
      </ul>
  </aside>
)

export default PortfolioNav
