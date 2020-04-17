import React from 'react';
import Layout from "./portfolioLayout"
import { graphql } from "gatsby"
import SiblingNav from '../components/siblingNav'
import Callouts from '../components/callouts'
import { TransitionState } from "gatsby-plugin-transition-link"

//import Link from 'gatsby-link'

class PortfolioTemplate extends React.Component {
    constructor (props, transitionStatus) {
        super(props)
    }

    render() {
        const post = this.props.data.markdownRemark;
        const transitionStatus = this.props.transitionStatus;

        return (
            <Layout>
                <article className={`port-item ${transitionStatus}`}>
                    <div className="intro-text content-contatiner">
                        <section className="portfolio-container nested-grid">
                            <h2>{post.frontmatter.title}</h2>
                            <div className="port-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                            <figure className="article-figure">
                                <div className="image-wrapper">
                                    <img src="https://assets.bonappetit.com/photos/57adf80c1b33404414975841/16:9/w_1280,c_limit/sloppy-tacos.jpg" alt="Test"/>
                                </div>
                                <figcaption>{post.frontmatter.caption}</figcaption>
                            </figure>
                            <SiblingNav 
                                prev={post.frontmatter.prev}
                                prevTitle={post.frontmatter.prevTitle} 
                                next={post.frontmatter.next}
                                nextTitle={post.frontmatter.nextTitle} 
                            />
                            <div class="callouts">
                                <ul>
                                    {post.frontmatter.tags.map(tag => (
                                      <li key={tag}>
                                          {tag}
                                      </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="side-text">Another <span>page test</span></div>
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
        prev 
        next
        prevTitle
        nextTitle
        caption
        tags
      }
    }
  }
`;