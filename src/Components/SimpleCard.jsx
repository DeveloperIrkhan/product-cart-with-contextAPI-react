import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';

const SimpleCard = ({ products }) => {
  const { cart, setCart } = useContext(CartContext)
  const isInCart = cart.some((item) => item.id === products.id);
  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, products]);
  };

  const handleRemoveFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== products.id));
  };
  console.log("Cart Context", useContext(CartContext))
  return (
    <div className="card m-2" key={products.id} style={{ width: '18rem' }}>
      <img src={products.image} style={{ height: "40vmin" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">Price : {products.price}</p>
        {isInCart ? (
          <button className="btn btn-outline-success"
            onClick={handleRemoveFromCart}>
            Remove item Cart
          </button>
        ) : (
          <button className="btn btn-success"
            onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}

      </div>
    </div >
  )
}

export default SimpleCard