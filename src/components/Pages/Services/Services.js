import './Services.css';
import React from 'react';
import Service from './Service/Service';
import { useServices } from '../../../hooks/useServices';

const Services = () => {
    
    const [services] = useServices();
    
    return (
        <div className="mt-3">
            <h1 className="mb-4">Our services</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 g-5">
                    {
                        services.map(service =><Service key={service.serviceID} service={service}/>)
                    }        
                </div>
            </div>
        </div>
    );
};

export default Services;