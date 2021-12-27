import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Main from '../components/Main.js'
import Navbar from '../components/Navbar.js'


function Homepage() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Homepage;