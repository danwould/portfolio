import React from 'react'
import Helmet from 'react-helmet'

import '../layouts/index.scss'

import Header from './header.js'
import MainNav from './mainNav.js'
import SocialNav from './socialNav.js'
import Footer from './footer.js'

class MainTemplate extends React.Component {
    constructor (props) {
        super(props)
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
                    {this.props.children}
                </main>

                <SocialNav />
                <Footer />
            </div>
        )
    }
}

export default MainTemplate