import './Sponsors.css';

import React from 'react';

const Sponsors = () => {
    return (
        <div className="container-fluid bg-dark">
            <h1 className="text-light"> Our Sponsors</h1>
            <div className="container py-3">
                <div className = "row row-cols-2 row-cols-md-4">
                    <div className="col"><img src="./images/sponsors/chevron.png" alt="" /></div>
                    <div className="col"><img src="./images/sponsors/square.png" alt=""  /></div>
                    <div className="col"><img src="./images/sponsors/icddrb.png" alt=""  /></div>            
                    <div className="col"><img src="./images/sponsors/incepta.png" alt="" /></div>            
                </div>
            </div>
        </div>
    );
};

export default Sponsors;