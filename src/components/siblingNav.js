import React from 'react'
import Link from 'gatsby-link'

class PortfolioNav extends React.Component {

    render() {
      return (
        <nav className="nav--sibling">
            <ul>
                <li>
                    {this.props.prev !== '' ? 
                    <Link to={this.props.prev} activeClassName="prev-page-link">
                      <span className="arrow">&#8701;</span>
                      <span className="sibling--link-text">{this.props.prevTitle}</span>
                    </Link>
                    : null}
                </li>
                <li>
                    {this.props.next !== '' ? 
                    <Link to={this.props.next} activeClassName="next-page-link">
                      <span className="arrow">&#8702;</span>
                      <span className="sibling--link-text">{this.props.nextTitle}</span>
                    </Link>
                    : null}
                </li>
            </ul>
        </nav>
      )
    }
}

export default PortfolioNav
