import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Card.css'

const Card = ({card}) => {
    const {name,image} =card;
    return (
        <div className='add-card'>
            <img src={image} alt="" />
            <p>{name.slice(0,25)}</p>
            <div className="delete-btn">
            <FontAwesomeIcon icon={ faTrashAlt}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Card;