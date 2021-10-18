import './Banner.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Banner = () => {

    const history = useHistory()

    const redirectToRegister = () => {
        history.push('/register')
    }

    return (
        <div className='banner d-flex flex-column flex-md-row justify-content-center align-items-center overflow-hidden'>
            <div>
                <h1>
                We are here for you during covid times
                </h1>
                <button onClick={redirectToRegister}>
                    Sign up Now
                </button>
            </div>
            <div><img src="https://i.ibb.co/1fbjFTR/banner.png" className="img-fluid" alt=""/></div>
        </div>
    );
};

export default Banner;