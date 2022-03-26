import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Products from '../Products/Products';
import './Container.css'



const Container = () => {
    const [products, setProducts] = useState([]);
    const [cards, setCards] =useState([]);
    const addCardInfo = cardproduct =>{ 
        const adadedProdut = cards.find(product => product.id == cardproduct.id)
        if(adadedProdut){
            
        }
        else{
            const newCard = [...cards,cardproduct];
            setCards(newCard)
        }
    }
    const chooseRendom = () =>{
        const randomCard = cards[Math.floor(Math.random()*cards.length)];
        console.log(randomCard)
    }
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
                products.map(product => <Products key={product.id} product={product} addCardInfo={addCardInfo}></Products>)
                }
            </div>
            <div className="card-container">
            <h2>Selected Items:</h2>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
                <div className='card-button'>
                    <button onClick={chooseRendom}>CHOOSE 1 FOR ME</button><br></br>
                    <button>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Container;