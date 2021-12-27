import React from 'react'
import Footer from '../components/footer/Footer.js'
import Header from '../components/header/Header.js'
import Main from '../components/main/Main.js'
import Navbar from '../components/navbar/Navbar.js'


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