import React from 'react'
import {Link} from 'react-router-dom'
import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="container-right">
                    <Link to="#">About us</Link>
                    <Link to="#">Contact us</Link>
                </div>
                <div className="container-left">
                    <Link to="#">Homepage</Link>
                    <Link to="#">Categories</Link>
                </div>
                <div className="container-center">
                    <p>© 2020 Resonance - All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
