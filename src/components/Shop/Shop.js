import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

const [products, setProducts] = useState([])
const [cart , setCart] = useState([])


useEffect( ()=>{
    fetch('products.json')
    .then( res => res.json())
    .then( data => setProducts(data))
    // .then( data => console.log(data))
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
                            // img={product.img}
                            // name={product.name}
                            // price={product.price}
                            // seller={product.seller}
                            // ratings={product.ratings}
                            ></Product>)
                        }
            </div>

            <div className="cart-container">
                      <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;