import React from 'react';
import { useParams } from 'react-router-dom';
import IMAGES from '../components/media';
import './Productpage.scss';
import {useDispatch,useSelector} from 'react-redux'
import {addProduct} from '../features/selectedProducts'
import {getSelectedProducts} from '../features/selectedProducts'

function Productpage() {
    const {productid} = useParams()
    const dispatch = useDispatch()
    const selectedProducts = useSelector(getSelectedProducts)
    console.log('the selectedProducts',selectedProducts)

    function getImage() {
        const foundedImage = IMAGES.find(img => img.id == productid);
        return foundedImage;
    }


    function handleSubmit(e) {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const foundedImage = getImage()
        dispatch(addProduct({ product:{...foundedImage}, quantity:quantity}))
    }



  return (
  <div className="productPage">
      <div className="image-container">
          <img src={getImage().src}/>
      </div>
      <div className="image-description">
          <h2 className="image-title">
              {getImage().name}
          </h2>
          <h3 className="image-price">
              {getImage().price}$
          </h3>
          <p className="image-description">
              {getImage().description}
          </p>
          <form className="image-form" onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="quantity-container">
                    <div className="quantity-title"> Quantity: </div>
                    <input className='quantity' name='quantity' placeholder='quantity' type='number' min='1'/>
              </div>
              <div className="submitButton-container">
                  <button className='submitButton'>Add to Cart</button>
              </div>
              </div>
          </form>
      </div>
  </div>
  );
}

export default Productpage;
