import React from 'react';
import useService from '../../../hooks/useService';
import './Service.css'
import ServiceData from './ServiceData';

const Service = () => {
    const [service] = useService();
    return (
        <div>
            <div className="container">
                <div className="service_area">
                    <h3 className="text-center mb-5">Service</h3>
                    <div className="service_area_box">
                        <div className="row">
                            {
                                service.map(data => <ServiceData key={data.id} servicedata={data}></ServiceData>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;