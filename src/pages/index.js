import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

const IndexPage = () => (
    <Layout>
        <article className="home-page">
          <section className="nested-grid">
              <div className="intro-text content-contatiner">
                  <h2>Something more sentence like here.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      Ut enim ad minim veniam, quis.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
                  <Link to="/work/" className="cta-link">Go to Twerk</Link>
                  <Link to="/about/" className="cta-link">Go to About</Link>
              </div>

              <div className="image-wrapper"></div>
          </section>
        </article>
    </Layout>
)

export default IndexPage
