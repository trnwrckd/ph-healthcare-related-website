import './SingleMed.css';
import React from 'react';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleMed = (props) => {

    const { medName,amount, medType, chemicalName, pharma, stripPrice, packPrice } = props.medicine;

    return (
        <div className="col">
            <div className="bg-warning p-3 rounded">
                <div className="d-flex align-items-center fs-3 ">
                    <FontAwesomeIcon icon={faPills} ></FontAwesomeIcon>
                    <span className="ms-3">{medName}</span>
                    <span className="fs-5 ms-3">{medType}</span>
                </div>
                <div className="text-start med-details">
                    <p>{chemicalName}</p>
                    <p>{amount}</p>
                    <p>{pharma}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p>{stripPrice} BDT per Strip</p>
                            <p>{packPrice} BDT per box</p>
                        </div>
                        <div>
                            <button className="btn-generic">Buy Now</button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default SingleMed;