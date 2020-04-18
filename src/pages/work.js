import React from 'react'
import Layout from "../components/layout"
import { TransitionState } from "gatsby-plugin-transition-link"
import PortfolioNav from '../components/portfolioNav.js'

const WorkPage = ({ children, transitionStatus, entry, exit}) => (
        <Layout>
            <article className={`work-page-content work-page work ${transitionStatus}`}>
                <section className="portfolio-container nested-grid">
                    <div className="intro-content">
                        <h2>Web</h2>
                        <p>Click them boxes for more info on some web projects I've worked on.</p>
                    </div>
                    <PortfolioNav />
                     <div className="side-text">Another <span>page test</span></div>
                </section>
            </article>
        </Layout>
)

export default WorkPage
