import React, { useContext, useState } from 'react'
import SimpleCard from './SimpleCard';
import ArrayofProduct from './ProductArray';
import CartContext from '../Context/CartContext';

const Products = () => {
  console.log("hi")
  const [cart, setCart] = useState()
//  const { cart, setCart } = useContext(CartContext)
  return (
    <div className='border border-2 container d-flex flex-wrap justify-content-center'>
      <h3>Product Page</h3>
      {ArrayofProduct.map((items) => {
        return (
          <div className="">
            <SimpleCard key={items.id} products={items} cart={cart} setCart={setCart} />
          </div>
        )
      })}
    </div>
  )
}

export default Products