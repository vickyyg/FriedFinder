import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const CartContent = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Chosen products</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Carrito vacío</p>
      ) : (
        cartItems.map((product) => (
          <div key={product.id}>
            <ItemCount product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default CartContent;