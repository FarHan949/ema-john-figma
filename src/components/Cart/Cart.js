import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h2>this is cart</h2>
            <p>cart : {cart.length}</p>
        </div>
    );
};

export default Cart;