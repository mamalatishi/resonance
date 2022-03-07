import React from 'react'
import './menu.scss'
import {Link} from 'react-router-dom'

function Menu({menu}) {
  return (
    <div className={`menu ${menu}`}>
      <div className="container--grid">
      <div className="menu_container--men">
        <div className="menu_title--men">Men</div>
        <div className="menu_title--clothing"><Link to='/products'>Clothing</Link></div>
        <div className="menu_title--shoes"><Link to='/products'>Shoes</Link></div>
        <div className="menu_title--sale"><Link to='/products'>On Sale</Link></div>
      </div>
      <div className="menu_container--women">
        <div className="menu_title--women">Women</div>
        <div className="menu_title--clothing"><Link to='/products'>Clothing</Link></div>
        <div className="menu_title--shoes"><Link to='/products'>Shoes</Link></div>
        <div className="menu_title--sale"><Link to='/products'>On Sale</Link></div>
      </div>
      <div className="menu_container--kids">
      <div className="menu_title--kids">Kids</div>
        <div className="menu_title--clothing"><Link to='/products'>Clothing</Link></div>
        <div className="menu_title--shoes"><Link to='/products'>Shoes</Link></div>
        <div className="menu_title--sale"><Link to='/products'>On Sale</Link></div>
      </div>
      <div className="menu_container--sale">
      <div className="menu_title--sale">Sale</div>
        <div className="menu_title--clothing"><Link to='/products'>Clothing</Link></div>
        <div className="menu_title--shoes"><Link to='/products'>Shoes</Link></div>
      </div>

      </div>
      
    </div>
  )
}

export default Menu