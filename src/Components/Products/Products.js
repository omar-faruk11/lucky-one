

const Products = ({product}) => {
    const {name,price,image} = product;
    return (
        <div className="product-card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-info">
                <h3>Name:{name} </h3>
                <p>Price:{price} </p>
            </div>
            <div className="card-btn">
                <button> try it</button>
            </div>
        </div>
    );
};

export default Products;