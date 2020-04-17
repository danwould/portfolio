import React from 'react'
import Helmet from 'react-helmet'

import '../layouts/index.scss'
import '../layouts/styles/_portfolioItem.scss'

import Header from './header.js'
import MainNav from './mainNav.js'
import SocialNav from './socialNav.js'
import PortfolioNav from './portfolioNav.js'
import Footer from './footer.js'

class PortfolioTemplate extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className={"container--grid inner-page work-page"}>
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
                    {this.props.children}
                </main>

                {/*Potfolio Nav maaaaaay become a picture switcher */}
                <PortfolioNav />
                <SocialNav />
                <Footer />
            </div>
        )
    }
}

export default PortfolioTemplate