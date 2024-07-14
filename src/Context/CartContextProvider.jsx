import { useState } from "react";
import CartContext from "./CartContext";
const CartContextProvider = ({ ChildComponents }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {ChildComponents}
    </CartContext.Provider>
  );
};
export default CartContextProvider