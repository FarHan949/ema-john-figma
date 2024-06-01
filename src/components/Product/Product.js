import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    console.log(props)
    const {Product, handlerToCart} = props
    // const {img, name, price, seller, ratings} = props.Product
    return (
        <div className='product'>
         <img src={props.img} alt=""></img> 
           
            <div className='p-info'>
            <p className='p-name'>{props.name}</p>
            <p>price : ${props.price}</p>
            <p><small>Seller : {props.seller}</small></p>
            <p><small>Ratings : {props.ratings}</small></p>
            </div>
            <button onClick={()=>handlerToCart(Product)} className='cart-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;