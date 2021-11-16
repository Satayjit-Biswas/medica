import React from 'react';
import './Error.css'
import img from '../../assets/error.jpg'

const Error = () => {
    return (
        <div>
            <div className="conatiner">
                <div className="error_area text-center">
                    <img src={img} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Error;