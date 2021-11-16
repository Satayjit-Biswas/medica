import React from 'react';
import logo from '../../../assets/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="footer_area pt-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer_logo">
                                <img src={logo} alt="" />
                            </div>
                            <p className="footer_logo_text">
                                It is a long established fact that a
                                reader will be distracted by the
                                readable.
                            </p>
                            <div className="footer_icon">
                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                <a href="/"><i className="fab fa-twitter"></i></a>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                                <a href="/"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer_service">
                                <h4>Services</h4>
                                <p><a href="/">Conditions</a></p>
                                <p><a href="/">Term of Use</a></p>
                                <p><a href="/">Our Services</a></p>
                                <p><a href="/">New Guests Lists</a></p>
                                <p><a href="/">The Team List</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer_service">
                                <h4>Quick Links</h4>
                                <p><a href="/">Appointments</a></p>
                                <p><a href="/">Contact Us</a></p>
                                <p><a href="/">Working Hours</a></p>
                                <p><a href="/">Doctors</a></p>
                                <p><a href="/">Opening</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="subscribe">
                                <h4>Subscribe</h4>
                                <form>
                                    <input type="text" />
                                    <button className="btn_custom">Subscribe</button>
                                </form>
                                <p>Get The Latest Updates via email. Any time you may unsubscribe</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="buttom_footer">
                <p>© MEDICA <span>2021</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;