import React from 'react'
import Layout from "../components/portfolioLayout"
import { TransitionState } from "gatsby-plugin-transition-link"

const WorkPage = ({ children, transitionStatus, entry, exit}) => (
        <Layout>
            <article className={`content-grid work-page ${transitionStatus}`}>
                <section className="portfolio-container">
                    <h2>Work Landing</h2>
                    <p>Welcome to your new Gatsby site.</p>
                    <p>Now go build something great.</p>
                </section>
            </article>
        </Layout>
)

export default WorkPage
