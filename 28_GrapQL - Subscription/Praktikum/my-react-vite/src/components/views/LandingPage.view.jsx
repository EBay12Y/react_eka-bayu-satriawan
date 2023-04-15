import React from 'react'
import { Navbar, Landing, Footer, ListProductQL } from "../organism";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            <ListProductQL />
            <Footer />
        </div>
    )
}

export default LandingPage