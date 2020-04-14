import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <article className="content-grid">
      <section className="portfolio-container">
          <h2>Another page test</h2>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/work/">Go to Home</Link>
      </section>
  </article>
)

export default AboutPage
