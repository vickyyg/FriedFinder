import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './ItemCount.css';

const ItemCount = ({ product }) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const { addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    setTotalPrice(product.price * count);
  }, [count, product.price]);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count,
      totalPrice: totalPrice,
    };
    addToCart(item);

  };

  return (
    <div className="card-container">
      <div className='card'>
      <h2>{product.name}</h2>
        <img 
        className='card-image'
        src={product.image}
        alt={product.name} 
        />
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <div className='counter'>
          <button  onClick={incrementCount} variant="danger">+</button>
          <span>{count}</span>
          <button  onClick={decrementCount} variant="danger">-</button>
        </div>
        <p>Precio total: ${totalPrice}</p>
          <Link  to="/forms" onClick={() => handleAddToCart({product, count})}>Finalizar compra</Link>
        <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
   </div>
   </div>
  );
};

export default ItemCount;
