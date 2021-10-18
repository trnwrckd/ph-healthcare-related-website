import './Products.css';
import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('./products.json').then(result => result.json())
            .then(data => setProducts(data));
    } , [])

    return (
        <div className="container">
            <div className = "row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {
                products?.map( product => <SingleProduct key={product.productID} product={product} /> )
            }
            </div>
        </div>
    );
};

export default Products;