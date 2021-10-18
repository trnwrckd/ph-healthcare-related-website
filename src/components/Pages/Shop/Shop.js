import './Shop.css';
import React, { useState  ,useEffect } from 'react';
import Medicine from './Medicine/Medicine';
import Products from './Products/Products';

const Shop = () => {

    const [component, setComponent] = useState(0);
   
    const handleClick = (innerText) => {
        innerText = innerText ? innerText : 'products';
        innerText = innerText.toLowerCase();
        console.log(innerText);
        const component = (innerText === 'medicine') ? 1 : 0;
        setComponent(component);
    }
    
    useEffect( handleClick , [])

    return (
        <div>
            <ul className = 'sub-nav'>
                <li onClick={(e)=>{handleClick(e.target.innerText)}}>medicine</li>
                <li onClick={(e)=>{handleClick(e.target.innerText)}}>products</li>
            </ul>
            {
                component ? <Medicine/> : <Products/>
            }
        </div>
    );
};

export default Shop;