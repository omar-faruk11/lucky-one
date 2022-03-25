import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Container.css'



const Container = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h2>Choose the best</h2>
            <div className='container'>
            <div className="products-container">
                {
                products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
            <div className="card-container">
                <h2>this is card container</h2>
            </div>
        </div>
        </div>
    );
};

export default Container;