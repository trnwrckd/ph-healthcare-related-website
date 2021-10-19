import './Service.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = (props) => {
    const { serviceID , serviceName, image, shortDesc } = props.service;
    const history = useHistory();

    const redirectToDetails = (serviceID) => {
        const url = `/service/${serviceID}`;
        history.push(url);
    }

    return (
        <div className="col">
            <div className="h-100 p-3 d-flex align-items-center flex-column flex-lg-row service-card">
                <div>
                    <img src={image} alt=""  height="200px" width="200px"/>
                </div>
                <div className="d-flex flex-column justify-content-center ps-4">
                    <h4>{serviceName}</h4>
                    <p className="mt-2 mb-4">{shortDesc}</p>
                <div>
                    <button className="btn-generic btn-blue" onClick={ ()=>{redirectToDetails(serviceID)}}>
                        View Details
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;