import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Transition from 'react-transition-group/Transition'
import Helmet from 'react-helmet'

import '../layouts/index.scss'
import '../layouts/styles/_portfolioItem.scss'

import Header from '../components/header.js'
import MainNav from '../components/mainNav.js'
import SocialNav from '../components/socialNav.js'
import PortfolioNav from '../components/portfolioNav.js'
import SiblingNav from '../components/siblingNav.js'
import Footer from '../components/footer.js'

const pageTransitionEvent = 'gatsby-plugin-page-transition::exit';

const gridStyle = {
    gridColumnStart: 1,
    gridColumnEnd: 'main',
    gridRowStart: 1,
    gridRowEnd: 5
}

const fadeIn = {
    transition: 'all 1s ease-in-out',
    opacity: 0
}

const transitionStyles = {
    entered:  { opacity: 1},
    exiting:  { opacity: 0}
}

class MainTemplate extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props.location)
        this.listenHandler = this.listenHandler.bind(this)
        this.state = {
            in: false
        }
    }

    componentDidMount () {
        global.window.addEventListener(pageTransitionEvent, this.listenHandler)
        this.setState({
            in: true
        })
    }

    listenHandler () {
        this.setState({
            in: false
        })
    }

    componentWillUnmount () {
        global.window.removeEventListener(pageTransitionEvent, this.listenHandler)
    }

    render () {
        return (
            <div className={"container--grid inner-page"}>
                <Helmet
                    title="Dan Would Design"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />
                <MainNav />
                <Header />

                <main className="nested-grid">
                    <PageTransition defaultStyle={{...gridStyle}} transitionTime={500}>
                        <Transition in={this.state.in} out={this.state.out} timeout={1000}>
                            {(state) => (
                                <div style={{
                                    ...fadeIn,
                                    ...transitionStyles[state]
                                }}>
                                    {this.props.children}
                                </div>
                            )}
                        </Transition>
                    </PageTransition>
                    <SiblingNav />

                    {/*This may become the portfolio nav */}
                    <div className="callouts">
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                        </ul>
                    </div>
                    <div className="side-text">Another <span>page test</span></div>
                </main>

                {/*Potfolio Nav maaaaaay become a picture switcher */}
                <PortfolioNav />
                <SocialNav />
                <Footer />
            </div>
        )
    }
}

export default MainTemplate