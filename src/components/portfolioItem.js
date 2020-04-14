import React from 'react';
import Layout from "../pages/portfolioLayout"
import { graphql } from "gatsby"
import Link from 'gatsby-link'

class PortfolioTemplate extends React.Component {

    render() {
        const post = this.props.data.markdownRemark;

        return (
            <Layout>
                <article className={"port-item"}>
                    <div className="intro-text content-contatiner">
                        <section className="portfolio-container nested-grid">
                            <h2>{post.frontmatter.title}</h2>
                            <div className="port-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                            <figure className="article-figure">
                                <div className="image-wrapper">
                                    <img src="https://assets.bonappetit.com/photos/57adf80c1b33404414975841/16:9/w_1280,c_limit/sloppy-tacos.jpg" alt="Test"/>
                                </div>
                                <figcaption>"Quotey Quotes and Stuff."</figcaption>
                            </figure>
                        </section>
                    </div>
                </article>
            </Layout>
        );
    }
}

export default PortfolioTemplate;

export const pageQuery = graphql`
  query pageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;