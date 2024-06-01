import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

const [products, setProducts] = useState([])
const [cart , setCart] = useState([])

useEffect( ()=>{
    fetch('products.json')
    .then( res => res.json())
    .then( data => setProducts(data))
}, [])


const handlerToCart =(product) => {
    // console.log(product)
      const newCart = [...cart, product]
      setCart(newCart)
}

    return (
        <div className='shop'>
            <div className="product-container">     
                        {
                            products.map( product => <Product 
                            key={product.id}
                            product={product}
                            handlerToCart={handlerToCart}
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            seller={product.seller}
                            ratings={product.ratings}
                            ></Product>)
                        }
            </div>

            <div className="cart-container">
                      <h2>this is cart</h2>
                      <p>cart : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;