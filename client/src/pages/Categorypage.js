import React from 'react'
import {Link} from 'react-router-dom'
import pic16 from '../components/media/pic16.jpg'
import pic17 from '../components/media/pic17.jpg'
import pic18 from '../components/media/pic18.jpg'
import pic19 from '../components/media/pic19.jpg'
import './Categorypage.scss'

function CategoryItem({src,name}) {
    return(
        <div className="categoryItem">
            <Link to='/products'>
                <img src={src} alt={name} />
                <div className="title-container">
                    <span>{name}</span>
                </div>
            </Link>
        </div>
    )
}

function Categorypage() {
    const categories = [{name:'Jeans' , src:pic16} , {name:'Shirts' , src:pic17} ,{name:'Hats' , src:pic18},{name:'Jackets' , src:pic19}]
  return (
    <div className="categoryPage">
    {categories.map((item) => {
        return <CategoryItem name={item.name} src={item.src} />
    })
    }    
    </div>
  )
}

export default Categorypage