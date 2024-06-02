import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
// const {cart} = props

  // console.log(cart)

  let total = 0;


  for (const product of cart) {
    total = total + product.price
    }

    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected item : {cart.length}</p>
            <p>Total price : {total}</p>
            <p>Total Shipping : </p>
            <p>Tax : </p>
            <h5>Grand Total : </h5>
        </div>
    );
};

export default Cart;