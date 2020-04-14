import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Transition from 'react-transition-group/Transition'
import Helmet from 'react-helmet'

import '../layouts/index.scss'

import Header from './header.js'
import MainNav from './mainNav.js'
import SocialNav from './socialNav.js'
import Footer from './footer.js'

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
    exited:  { opacity: 0}
}

class MainTemplate extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
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
            <div className={"container--grid"}>
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
                        <Transition in={this.state.in} timeout={1000}>
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

                    <div className="side-text">Another <span>page test</span></div>
                </main>

                <SocialNav />
                <Footer />
            </div>
        )
    }
}

export default MainTemplate