import './ServiceDetails.css';
import { useParams } from 'react-router-dom';
import { useServices } from '../../../../../hooks/useServices';


const ServiceDetails = () => {
    const {serviceID} = useParams();
    const [services] = useServices();
    const thisService = services[serviceID - 1];

    const { serviceName, image, description } = thisService ? thisService : {};
    
    return (
        <div className="service-details mt-nav">
        <div className="py-5 my-5 container d-flex flex-column flex-md-row align-items-center justify-content-around">
            <div>
                <img src={image} height="300px" alt="" />
            </div>
            <div className="px-md-3 d-flex flex-column align-items-center">
                <h1>{serviceName}</h1> 
                <p className="fs-4">{description}</p>
                <button className= "btn-generic">
                    Get Service
                </button>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;