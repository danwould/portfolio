import React from 'react'
import Link from 'gatsby-link'

const PortfolioNav = () => (
  <aside className="nav--portfolio">
      <ul>
          <li>
              <Link to="/work/deltaco/" activeClassName="active-page-link">Item 1</Link>
          </li>
          <li>
              <Link to="/work/zenpop/" activeClassName="active-page-link">Item 2</Link>
          </li>
          <li>
              <Link to="/work/deltaco/" activeClassName="active-page-link">Item 3</Link>
          </li>
          <li>
              <Link to="/work/zenpop/" activeClassName="active-page-link">Item 4</Link>
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
