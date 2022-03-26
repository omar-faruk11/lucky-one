import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Products.css'

const Products = ({product,addCardInfo}) => {
    const {name,price,image} = product;
    return (
        <div className="product">
            <img className="product-img" src={image} alt="" />
            <div className="product-info">
                <h3>{name} </h3>
                <p>Price:{price} </p>
                <button onClick={() => addCardInfo(product)} className="product-btn">
                    <p>ADD TO CARD</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Products;