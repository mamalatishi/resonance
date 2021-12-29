import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineShoppingCart,HiSearch,HiUser} from 'react-icons/hi';
import './navbar.scss';

function Navbar() {

    function handleSearchButton(e) {
        console.log('handleSearchButton')
    }
    return (
        <div className='navbar'>
            <div className="container">
            <div className="brand">
                <Link to='/'>
                    <h1>Resonance</h1>
                </Link>
            </div>
            <button onClick={handleSearchButton}><HiSearch/></button>
            <Link to='/user'><HiUser/></Link>
            <Link to='/shoppingcard'><HiOutlineShoppingCart/></Link>
            </div>
        </div>
    )
}

export default Navbar


