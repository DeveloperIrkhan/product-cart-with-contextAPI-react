import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../Context/CartContext'
import SimpleCard from './SimpleCard'

const ShopingCart = () => {
  const [total, setTotal] = useState();
  const { cart } = useContext(CartContext)
  const imageurl = "https://th.bing.com/th/id/R.b6bfa0f21bb4faa4f3d96ce4f100c038?rik=oodvpnmlEW0EUA&pid=ImgRaw&r=0"
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])
  return (

    <div className="container">
      <div className=''>
        <div className="">
        <span className='fs-3 fw-bold text-center'>Shoping Card</span>
        </div>
        <div className="">
        <span className='d-flex fw-bold justify-content-end'>Your Total Price is : {total}</span>
        </div>
        {cart.length > 0 ? (
          <div className='d-flex flex-wrap justify-content-center'>
            {cart.map((product) => {
              return (
                <div key={product.id} className="">
                  <SimpleCard products={product} />
                </div>)
            })}
          </div>
        ) : (
          <div className='p-4 d-flex justify-content-center 
                          align-items-center'>
            <img style={{ width: '18rem' }} src={imageurl} />
          </div>
        )}
      </div>
      <br />
    </div>
  )
}

export default ShopingCart