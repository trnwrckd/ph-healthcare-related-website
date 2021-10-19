import './SingleProduct.css';
import React from 'react';

const SingleProduct = (props) => {
    const {productName, productImage, originalPrice, discountPrice, sold, stock } = props.product;
    return (
        <div className="col">
            <div className="bg-info h-100 py-3 d-flex flex-column justify-content-between">
                <div><img src={productImage} className="img-fluid" alt="" /></div>
                <div>
                    <h4>{productName}</h4>
                    <p> Regular Price: <strike>{originalPrice} BDT.</strike></p>
                    <p>Discount Price: {discountPrice} BDT.</p>
                    <p>{sold} Already sold</p>
                    <p>Only {stock} left in stock!</p>
                    <button className="btn-generic">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;