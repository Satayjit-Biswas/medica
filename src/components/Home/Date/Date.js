import React from 'react';
import './Date.css'
const Date = () => {
    return (
        <div>
            <div className="container">
                <div className="date_area_wrap">
                    <div className="date_area">
                        <div className="row">
                            <div className="col-lg-4">
                                <h4>Consultation</h4>
                                <p>
                                    Whichever specific health issue you’re
                                    facing, we’llgive you a free consultation
                                    on it! Maecenas malesuada elit lectus.
                                    Quisque lorem neque.
                                </p>
                                <a href="/" className="btn_custom"> Free Consultation</a>
                            </div>
                            <div className="col-lg-4">
                                <h4>Opening hours</h4>
                                <div className="Opening_time">
                                    <p>
                                        Monday – Thursday
                                    </p>
                                    <span>7.00 - 18.00</span>
                                </div>
                                <div className="Opening_time">
                                    <p>
                                        Monday – Thursday
                                    </p>
                                    <span>7.00 - 18.00</span>
                                </div>
                                <div className="Opening_time">
                                    <p>
                                        Monday – Thursday
                                    </p>
                                    <span>7.00 - 18.00</span>
                                </div>
                                <div className="Opening_time">
                                    <p>
                                        Monday – Thursday
                                    </p>
                                    <span>7.00 - 18.00</span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h4>Emergency cases</h4>
                                    <div className="emergency_tel">
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="tel:+80012344567">+800 1234 45 67</a>
                                    </div>
                                <p>
                                    Your treatment plan is designed for steady 
                                    progress, with every phase promptly implemented.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Date;