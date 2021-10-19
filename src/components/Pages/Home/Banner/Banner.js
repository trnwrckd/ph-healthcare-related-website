import './Banner.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';

const Banner = () => {

    const history = useHistory();
    const { user } = useAuth();

    const redirectToRegister = () => {
        history.push('/register')
    }

    return (
        <div className="banner mt-nav d-flex align-items-center">
            <div className='container d-flex flex-column flex-lg-row justify-content-center align-items-center'>
                <div>
                    <h1 className="mb-3">We are here for you</h1>
                    <p className="fs-5 mb-3"> CovidSupport™  is a Chittagong based volunteer organization that's always there for you. <br /> We aspire to tend to your needs in these trying times. <br /> Our services are just a click away.</p>
                    {
                        !user.email &&
                        <button onClick={redirectToRegister} className="btn-generic">
                            Register Now <i className="fas fa-sign-in-alt ms-1"></i>
                        </button>
                    }
                </div>
                <div><img src="./images/banner.png" className="img-fluid" alt=""/></div>
            </div>
        </div>
    );
};

export default Banner;