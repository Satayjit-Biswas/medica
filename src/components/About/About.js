import React from 'react';
import img from '../../assets/about-image.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="About_area">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="About_area_box">
                                <img src={img} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="About_area_box">
                                <h4>OUR ABOUT US</h4>
                                <h2>We Should Do For Medical About This Success.</h2>
                                <p>It is issued free of charge in medical offices or at home with time purchase of services in the amount of more than $40 per person. ices in an elevated ambience, completed by service and report efficiency. Our Pathology division offers a comprehensive range of laboratory tests for diagnosis, management.</p>
                                <h5>Health Laboratory</h5>
                                <p>Some of the conditions overlap with those neurologists, and others are unique to this seen younger population.</p>
                                <div className="about_icon">
                                    <div className="d-flex">
                                        <i className="fas fa-check"></i>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                                <div className="about_icon">
                                    <div className="d-flex">
                                        <i className="fas fa-check"></i>
                                        <p>Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod iusto enim ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;