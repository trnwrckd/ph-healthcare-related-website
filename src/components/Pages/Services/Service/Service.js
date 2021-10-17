import './Service.css';
import React from 'react';

const Service = (props) => {
    const { serviceName, image, description } = props.service;

    return (
        <div className="d-flex">
            <div>
                <img src={image} alt="" className= "img-fluid" height="200px" width="200px"/>
            </div>
            <div className="d-flex flex-column justify-content-center ps-5">
                <p>{serviceName}</p>
                <p>{description}</p>
            <div>
                <button>
                    view details
                </button>
            </div>
            </div>
        </div>
    );
};

export default Service;