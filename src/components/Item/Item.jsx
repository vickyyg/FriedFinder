import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Item.css";
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';


const Product = () => {
   const [category, setCategory] = useState('all')
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const products = [
    {
      id: 1,
      image: './public/aroscebolla.webp',
      name: 'Full Burguer + Onion Rings',
      description: 'Potato bread, pickles, lettuce, tomato and meat',
      price: '3.00',
      
    },
    {
      id: 2,
      image: './public/CheeseBurguers.png',
      name: '2x1 Full Burguer + Cheddar',
      description: 'Onion, cheddar cheese, pickles, mayonnaise, tomato and meat',
      price: '4.99',
      category: 'sin-tacc',
    },
    {
      id: 3,
      image: './public/asadotira.jpg',
      name: 'Argentinian Burguer',
      description: 'Criolla sauce, meat tira de asado, cheddar cheese and caramelized onion',
      price: '6.00',
    },
    {
      id: 4,
      image: './public/veggie.webp',
      name: 'Veggie Beet Burguer',
      description: 'Beet burger, avocado, carrot strips and lettuce',
      price: '3.75',
    },
    {
      id: 5,
      image: './public/pollofrito.jpg',
      name: 'Fried Chicken',
      description: 'Fried chicken without oats, barley or rye',
      price: '5.00',
      category: 'sin-tacc',
    },
    {
      id: 6,
      image: './public/papasbacon.webp',
      name: 'Bacon Fries',
      description: 'Fries with bacon and cheddar',
      price: '2.00',
    },
    {
      id: 7,
      image: './public/hamburpollofrito.jpg',
      name: 'Chicken Burguer',
      description: 'Chicken, cheddar, Russian cheese, onion, tomato, lettuce and red bell pepper',
      price: '4.50',
      category: 'sin-tacc',
    },
    {
      id: 8,
      image: './public/huevo.jpg',
      name: 'Fried Egg Burguer',
      description: 'Meat, fried egg, tomato and parmesan cheese',
      price: '4.95',
      category: 'sin-tacc',
    },
    {
      id: 9,
      image: './public/4pisos.jpg',
      name: 'Four Meat Burguer',
      description: '4 meats, mozzarella, bacon, cheddar and caramelized onion',
      price: '6.00',
    },
    
  ];
    
   const filterProducts = (category) => {
    if (category === 'all') {
      return products;
    } else {
     return products.filter(product => product.category === category)
    }
   };

   const categoryChange = (event) => {
    setCategory(event.target.value);
   };

   const filteredProducts = filterProducts(category);


   return (
    <div className="container">
      <div className="row justify-content-center">
        <div  className="col-lg-12">
          <select  value={category} onChange={categoryChange}>
            <option  value="all">All</option>
            
            <option value="sin-tacc">Sin Tacc</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card d-flex justify-content-center align-items-center" style={{ width: "300px", marginBottom: "20px" }}>
              <img
                style={{ width: "300px", height: "200px", objectFit: "cover" }}
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <Link className="button" to="/cart" onClick={() => handleAddToCart(product)}>Comprar</Link>
                
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
