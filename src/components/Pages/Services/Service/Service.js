import './Service.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = (props) => {
    const { serviceID , serviceName, image, description } = props.service;
    const history = useHistory();

    const redirectToDetails = (serviceID) => {
        const url = `/service/${serviceID}`;
        history.push(url);
    }

    return (
        <div className="d-flex">
            <div>
                <img src={image} alt=""  height="200px" width="200px"/>
            </div>
            <div className="d-flex flex-column justify-content-center ps-5">
                <p>{serviceName}</p>
                <p>{description}</p>
            <div>
                <button onClick={ ()=>{redirectToDetails(serviceID)}}>
                    View Details
                </button>
            </div>
            </div>
        </div>
    );
};

export default Service;