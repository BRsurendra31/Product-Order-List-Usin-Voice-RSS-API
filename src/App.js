import React, { useState } from 'react';
import ProductRow from './components/ProductRow';
import OrderList from './components/OrderList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([{ name: '', quantity: 0 }]);
  const [order, setOrder] = useState([]);

  const handleAddProduct = () => {
    const lastProduct = products[products.length - 1];
    if (lastProduct.name && lastProduct.quantity > 0) {
      setProducts([...products, { name: '', quantity: 0 }]);
    } else {
      alert('Please complete the current product selection before adding a new one.');
    }
  };

  const handleChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const handleShowOrder = () => {
    const filteredProducts = products.filter(product => product.name && product.quantity > 0);
    setOrder(filteredProducts);
  };

  const handleReadOrder = async () => {
    const text = order.map(item => `${item.name} ${item.quantity}`).join(', ');
    const apiKey = '54fa5af43dd748f29eb1d24dfc0592fb'; // Replace with your Voice RSS API key

    try {
      const response = await axios.get(`https://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${encodeURIComponent(text)}&c=mp3`);
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      const audioUrl = response.request.responseURL;
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error('Error fetching the audio:', error);
    }
  };

  return (
    <div>
      <h1>Product Order List</h1>
      {products.map((product, index) => (
        <ProductRow
          key={index}
          index={index}
          product={product}
          onChange={handleChange}
        />
      ))}
      {products.length < 8 && <button onClick={handleAddProduct}>Add</button>}
      <button onClick={handleShowOrder}>Show Order</button>
      {order.length > 0 && (
        <div>
          <OrderList order={order} />
          <button onClick={handleReadOrder}>What is my Order?</button>
        </div>
      )}
    </div>
  );
};

export default App;
