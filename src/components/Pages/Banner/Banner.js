import './Banner.css';
import React from 'react';

const Banner = () => {
    return (
        <div className='banner d-flex flex-column flex-md-row justify-content-center align-items-center overflow-hidden'>
            <h1>
                We are here for you during covid times
            </h1>
            <div><img src="https://i.ibb.co/1fbjFTR/banner.png" className="img-fluid" alt="" srcset="" /></div>
        </div>
    );
};

export default Banner;