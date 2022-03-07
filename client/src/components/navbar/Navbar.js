import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {HiOutlineShoppingCart,HiSearch,HiUser,HiMenu} from 'react-icons/hi';
import Menu from '../menu/Menu'
import './navbar.scss';

function Navbar() {
    const products = useSelector((state) => state.selectedProducts.productList);
    const [badgeCount,setBadgeCount] = useState(products.length)
    const [menuOpen,setMenuOpen] = useState(false)

useEffect(() => {
    setBadgeCount(products.length)
} , [products])

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
            <Link to='/cart'>
                <HiOutlineShoppingCart/>
                <span className='badge'>{badgeCount}</span>
            </Link>
            <button onClick={() => setMenuOpen(p => !p)}><HiMenu/></button>
            </div>
            <Menu menu={menuOpen ? 'menuOpen' : 'menuClose'}/>
        </div>
    )
}

export default Navbar


