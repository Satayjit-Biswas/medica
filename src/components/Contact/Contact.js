import React from 'react';
import Touch from './Touch/Touch';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Touch></Touch>
            <div className="container">
            <h3 className="text-center mb-4">Contact Us</h3>
                <div className="contact_form">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row g-3 my-3">
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" placeholder="City" aria-label="City" />
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control" placeholder="State" aria-label="State" />
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control" placeholder="Zip" aria-label="Zip" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn_custom">Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;