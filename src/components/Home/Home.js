import React from 'react';
import Client from './Client/Client';
import Date from './Date/Date';
import Service from './Service/Service';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Date></Date>
            <Service></Service>
            <Client></Client>
        </div>
    );
};

export default Home;