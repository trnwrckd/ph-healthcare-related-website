import './Services.css';
import React from 'react';
import { useState , useEffect } from 'react/cjs/react.development';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(result => result.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="mt-3">
            <h1 className="mb-4">Our services</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    {
                        services.map(service => <Service key={service.id} service={service}/>)
                    }        
                </div>
            </div>
        </div>
    );
};

export default Services;