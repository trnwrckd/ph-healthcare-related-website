import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';

import './Home.css'
import Sponsors from './Sponsors/Sponsors';
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Sponsors></Sponsors>
            <About></About>
        </div>
    );
};

export default Home;