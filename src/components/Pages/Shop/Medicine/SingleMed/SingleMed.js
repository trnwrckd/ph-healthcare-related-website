import './SingleMed.css';
import React from 'react';

const SingleMed = (props) => {

    const { medName, chemicalName, pharma, stripPrice, packPrice } = props.medicine;

    return (
        <div>
            <p>{medName}</p>
            <p>{chemicalName}</p>
            <p>{pharma}</p>
            <p>{stripPrice}</p>
            <p>{packPrice}</p>
            
        </div>
    );
};

export default SingleMed;