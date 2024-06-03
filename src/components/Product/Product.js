import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const {product, handlerToCart} = props
    const { img, name, price, seller, ratings } = props.product

    return (
        <div className='product'>
            <img src={img} alt=""></img>

            <div className='p-info'>
                <p className='p-name'>{name}</p>
                <p>price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>

            <button onClick={()=>handlerToCart(product)} className='cart-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;