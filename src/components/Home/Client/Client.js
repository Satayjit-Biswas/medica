import React from 'react';
import './Client.css'

const Client = () => {
    return (
        <div>
            <div className="container">
                <div className="client_area">
                    <h3 className="text-center mb-5">Our Clients Say</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="client_area_box">
                                <i className="fas fa-quote-left"></i>
                                <p>I wanted to thank everyone at this
                                facility for the quality of care and 
                                compassion they showed during my stay.
                                </p>
                                <h6>Stacey Pickering</h6>
                                <p>Patient</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="client_area_box">
                                <i className="fas fa-quote-left"></i>
                                <p>I wanted to thank everyone at this
                                facility for the quality of care and 
                                compassion they showed during my stay.
                                </p>
                                <h6>Stacey Pickering</h6>
                                <p>Patient</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="client_area_box">
                                <i className="fas fa-quote-left"></i>
                                <p>I wanted to thank everyone at this
                                facility for the quality of care and 
                                compassion they showed during my stay.
                                </p>
                                <h6>Stacey Pickering</h6>
                                <p>Patient</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Client;