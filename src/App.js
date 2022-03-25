import './App.css';
import React, { useEffect, useState } from 'react';
import Products from './Components/Products/Products';

function App() {
  const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
  return (
    <div>
      <h2>Choose the best</h2>
      <div className="container">
        {
          products.map(product => <Products key={product.id} product={product}></Products>)
        }
      </div>
    </div>
  );
}

export default App;
