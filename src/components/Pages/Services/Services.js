import './Services.css';
import React from 'react';
import Service from './Service/Service';
import { useServices } from '../../../hooks/useServices';

const Services = () => {
    
    const [services] = useServices();
    
    return (
        <div className="my-5">
            <h1 className="mb-4">Our services</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 gy-3">
                    {
                        services.map(service =><Service key={service.serviceID} service={service}/>)
                    }        
                </div>
            </div>
        </div>
    );
};

export default Services;