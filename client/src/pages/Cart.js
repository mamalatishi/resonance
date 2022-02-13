import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getSelectedProducts ,deleteProduct } from '../features/selectedProducts';
import './Cart.scss'


function Cart() {
const products = useSelector(getSelectedProducts);
const dispatch = useDispatch()


  function handleDelete(p) {
    console.log(p.product)
    dispatch(deleteProduct(p.product))
  }

  return <div className="cart">
      <h1>Your Shopping Bag</h1>
      {products.productList.map((product) => {
        return(
          <div className="image">
          <div className="image-container">
            <img src={product.product.src} alt={`${product.product.name}`}/>
          </div>
          <div className="image-description">
            <p className="image-title">{product.product.name}</p>
            <div className="image-quantity">{`Amount : ${product.quantity}`}</div>
            <button className="btn-delete" onClick={() => handleDelete(product)}>Delete</button>
          </div>
        </div>
        )
      })}
      <div className="checkout">
            <div>Your Checkout Reciept :</div>
            <div className='checkout-container'>
            {products.productList.map((product) => {
              return(
                  <div className='checkout-items'>
                  {`${product.product.name} X${product.quantity}`}
                  </div>
              )
            })}
            </div>
            <div>{`Checkout Total : ${products.checkoutPrice}`}</div>
            <button className="btn-checkout">Checkout</button>
      </div>
  </div>;
}

export default Cart;
