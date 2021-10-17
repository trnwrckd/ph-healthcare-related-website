import './ServiceDetails.css';
import React, {useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { useServices } from '../../../../../hooks/useServices';


const ServiceDetails = () => {
    const {serviceID} = useParams();
    const [services] = useServices();
    const thisService = services[serviceID - 1];

    const { serviceName, image, description } = thisService? thisService :{}; 
    // console.log(thisService?.serviceName);
    return (
        <div>
            <img src={image} alt="" />
            <h1>{serviceName}</h1> 
            <p>{description}</p>
            
        </div>
    );
};

export default ServiceDetails;