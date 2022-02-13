import React, { useState , useCallback ,useEffect} from 'react'
import IMAGES from '../components/media'
import {Link,useSearchParams} from 'react-router-dom'
import './Products.scss'
import {FaSistrix} from 'react-icons/fa';
import {BsFillCartPlusFill} from "react-icons/bs";
import {useDispatch,useSelector} from 'react-redux'
import {addProduct} from '../features/selectedProducts'


function Card({image}) {

    const dispatch = useDispatch()

    function getImage() {
        const foundedImage = IMAGES.find(img => img.id == image.id);
        return foundedImage;
    }

    function handleClick(e) {
        const foundedImage = getImage()
        dispatch(addProduct({ product:{...foundedImage}, quantity:1 , price:foundedImage.price}))
    }

    return(
        <div className='card'>
            <Link to={`${image.id}`}>
                <img src={image.src} alt={`${image.gender}s clothing`} />
            </Link>
            <div className="card-description">
                <div className="inspect-icon">
                    <Link to={`${image.id}`}><FaSistrix/> </Link>
                </div>
                <div className="addToCard-icon">
                    <button type="button" className="addToCard" onClick={handleClick}><BsFillCartPlusFill/></button>
                </div>
            </div>
        </div>
    )
}

function Products() {
    const [filter,setFilter] = useState({gender:null,sale:false,collection:false})
    const [searchParams,setSearchParams] = useSearchParams()
    const search = searchParams.get('q');

    useEffect(() => {
        setFilter({...filter,[search] : true})
    },[])

    return (
        <div className="productsPage">
            <div className="container-header">
                <div className="section-header" onClick={() => setFilter({...filter,gender:'male'})}>
                    <img src={IMAGES[9].src} alt="men clothing" />
                </div>
                <div className="section-header" onClick={() => setFilter({...filter,gender:'female'})}>
                    <img src={IMAGES[10].src} alt="women clothing" onClick={() => setFilter({...filter,gender:'female'})}/>
                </div>
            </div>
            <div className="title-men" onClick={() => setFilter({...filter,gender:'male'})}>Men</div>
            <div className="title-women" onClick={() => setFilter({...filter,gender:'female'})}>Women</div>
            <div className="grid">
                {
                    (!filter.sale && !filter.gender) ?
                    IMAGES.map((image) => {
                        return(
                        <Card image={image} />
                    )}) : IMAGES.filter((image) => {
                        return(
                        image.gender === `${filter.gender}`
                        )
                    }).map((image) => {
                        return(
                            <Card image={image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
