import React from 'react';
import { useParams } from 'react-router';
import useService from '../../../../hooks/useService';
import FilterService from './FilterService';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const [service]= useService()
    const {id} = useParams();
    const filderData = service.filter(ser => ser.id === parseInt(id))
    return (
        <div className="container ServiceDetails">
                <div className="service_area">
                    <h3 className="text-center mb-5">Service</h3>
                    <div className="service_area_box">
                        <div className="row justify-content-center">
                        {
                            filderData.map(item =><FilterService key={item.id} filterdata={item}></FilterService>)
                        }
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ServiceDetails;