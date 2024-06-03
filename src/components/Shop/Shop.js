import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

const [products, setProducts] = useState([])
const [cart , setCart] = useState([])


useEffect( ()=>{
    fetch('products.json')
    .then( res => res.json())
    .then( data => setProducts(data))
}, [])


useEffect(()=> {

const storedCart = getStoredCart()
const saveCart = []
for (const id in storedCart) {
   const addedProduct = products.find(product => product.id === id)
   if(addedProduct){
       const quantity = storedCart[id]
       addedProduct.quantity = quantity
    //    console.log(quantity)
    //    console.log(addedProduct)
      saveCart.push(addedProduct)
   }
}

setCart(saveCart)
}, [products])


const handlerToCart =(selectedproduct) => {
     
      let newCart = []
      const exists = cart.find( product => product.id === selectedproduct.id)
      if(!exists){
        selectedproduct.quantity = 1
        newCart = [...cart , selectedproduct]
      }else{
        const rest = cart.filter( product => product.id !== selectedproduct.id)
        exists.quantity = exists.quantity + 1
        newCart = [...rest, exists] 
      }

      setCart(newCart)  
      addToDb(selectedproduct.id)   
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