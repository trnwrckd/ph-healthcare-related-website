import './Medicine.css';
import React, { useEffect, useState } from 'react';
import SingleMed from './SingleMed/SingleMed';

const Medicine = () => {

    const [medicines, setMedicines] = useState([]);

    useEffect(()=>{
        fetch('./medicine.json').then(result => result.json())
            .then(data =>setMedicines(data));
    },[])


    return (
        <div className="container">
            <div className=" row row-cols-1 row-cols-md-2 g-5">
            {
                medicines.map(medicine => <SingleMed key={medicine.medID} medicine= {medicine} />)
            }
            </div>
        </div>
    );
};

export default Medicine;