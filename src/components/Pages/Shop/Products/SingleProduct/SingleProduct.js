import './SingleProduct.css';
import React from 'react';

const SingleProduct = (props) => {
    const {productName, productImage, originalPrice, discountPrice, sold, stock } = props.product;
    return (
        <div>
            <img src={productImage} alt="" />
            <p>{productName}</p>
            <p>{originalPrice}</p>
            <p>{discountPrice}</p>
            <p>{sold}</p>
            <p>{stock}</p>
        </div>
    );
};

export default SingleProduct;