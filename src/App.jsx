import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navegador from './components/Nav/Nav';
import Wallpapper from './components/Wallpapper/Wallpapper';
import Product from './components/Item/Item';
import Footer from './components/Footer/Footer';
import CartContent from './components/CartContent/CartContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount';
import { CartProvider } from './components/Context/CartContext';
import Forms from './components/Form/Form';

function App() {
  return (
    <div style={{ backgroundColor: '#EEEEEE' }}>
      <BrowserRouter>
      <CartProvider>
        <Navegador />
        <Wallpapper/>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/item-count" element={<ItemCount />} />
          <Route path='/forms' element={<Forms />}/>
        </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;
