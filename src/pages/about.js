import React from 'react'
//import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Image from "../components/image"
import { TransitionState } from "gatsby-plugin-transition-link"
import Layout from "../components/layout"

const AboutPage = ({data, children, transitionStatus, entry, exit}) => (
  //console.log(props);

  <Layout>
	  <article className={`about-page inner-page ${transitionStatus}`}>
	      <section className="content-container nested-grid">
	          <header className="top-content">
	          	<h2>Sorry, no more puns!</h2>
	          	<p>Welcome to your new Gatsby site.</p>
	          </header>
              <div className="image-wrapper">
              <Img
		        fluid={data.file.childImageSharp.fluid}
		        alt=""
		      />
              </div>
	          <div className="bottom-content">
	          	<p>Take me to your leader! As an interesting side note, as a head without a body, I envy the dead. Say it in Russian! I feel like I was mauled by Jesus. Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages!</p>
	          	<p>Come, Comrade Bender! We must take to the streets! Why not indeed! You can crush me but you can't crush my spirit! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.</p>
	          	<p>But I know you in the future. I cleaned your poop. I guess because my parents keep telling me to be more ladylike. As though! Well, let's just dump it in the sewer and say we delivered it. Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon.</p>
	          </div>
	          <div className="side-text">DANWOULD <span>DESIGN</span></div>
	      </section>
	  </article>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "my-face.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`