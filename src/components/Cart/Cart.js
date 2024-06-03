import React from 'react';
import './Cart.css'

const Cart = (props) => {
const {cart} = props

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {  
        total = total + product.price  * product.quantity
        shipping = shipping + product.shipping
        quantity = quantity + product.quantity
    }
//    const tax = total * 10/100 
   const tax = parseFloat((total * 0.1).toFixed(2))
   const total_ammount = total + shipping + tax
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected item : {quantity}</p>
            <p>Total price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${total_ammount}</h5>
        </div>
    );
};

export default Cart;