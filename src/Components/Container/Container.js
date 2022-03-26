import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Products from '../Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import './Container.css';

const Container = () => {
    const [products, setProducts] = useState([]);
    const [cards, setCards] =useState([]);
    const [randomProdct, setrandomProudt] = useState({});
    const [show, setShow] = useState(false);
    
    const {name, image, price} = randomProdct;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    const addCardInfo = cardproduct =>{ 
        const adadedProdut = cards.find(product => product.id === cardproduct.id)
        if(!adadedProdut){
            const newCard = [...cards,cardproduct];
            if(newCard.length < 5){
                setCards(newCard)
            }
        }
    }
    const randomProdut = () =>{
        const chooses = cards[Math.floor(Math.random()*cards.length)];
        if(chooses){
           setrandomProudt(chooses)
           handleShow()
        }
        
    }
 
    useEffect(() =>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return (
        <div>
            <h2>Choose the best</h2>
            <div className='all-products'>
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
                    <button onClick={randomProdut}>CHOOSE 1 FOR ME</button><br></br>
                    <button onClick={()=> setCards([])}>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
        <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
            <h2 className=' '>YaY. It may Best for you.</h2>
        </Modal.Header>
        <div className="display-modal">
        <img className='w-50' src={image} alt="" />
        <div className='modal-info'>
        <h3>{name}</h3>
        <h4>{price}</h4>
        </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            I will Try agin
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay,Thanks
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Container;