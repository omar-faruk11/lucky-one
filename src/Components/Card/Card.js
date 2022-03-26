import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Card.css'

const Card = ({card}) => {
    const {name,image} =card;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h4>{name.slice(0,25)}</h4>
            <div className="delete-btn">
            <FontAwesomeIcon icon={ faTrashAlt}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Card;