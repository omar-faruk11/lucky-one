import './Products.css'

const Products = ({product}) => {
    const {name,price,image} = product;
    return (
        <div className="product">
            <img className="product-img" src={image} alt="" />
            <div className="product-info">
                <h3>Name:{name} </h3>
                <p>Price:{price} </p>
                <button className="product-btn">
                    <p>ADD TO CARD</p>
                </button>
            </div>
        </div>
    );
};

export default Products;