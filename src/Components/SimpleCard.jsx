import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';

const SimpleCard = ({ products,}) => {
  const isInCart = cart.some((item) => item.id === products.id);
  // const handleAddToCart = () => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };

  // const handleRemoveFromCart = () => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  // };
  const { cart, setCart } = useContext(CartContext)
  console.log("signle products ", cart)
  return (
    <div className="card m-2" key={products.id} style={{ width: '18rem' }}>
      <img src={products.image} style={{ height: "40vmin" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Product Name : {products.name}</h5>
        <p className="card-text">Price : {products.price}</p>
        {isInCart ? (
          <button className="btn btn-outline-success"
            onClick={() => {
              setCart((prevCart) => prevCart.filter((item) => item.id !== products.id)
              )
            }}>
            Remove item Cart
          </button>
        ) : (
          <button className="btn btn-success"
            onClick={() => {
              setCart((prevCart) => [...prevCart, products]);
            }}>
            Add to Cart
          </button>
        )}

      </div>
    </div >
  )
}

export default SimpleCard