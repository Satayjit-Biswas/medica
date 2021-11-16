import React from 'react';
import { useHistory } from 'react-router';
const ServiceData = (props) => {
    const history = useHistory();
    const {id,details,img,title} =  props.servicedata;
    const HandleService =()=>{
        history.push(`/details/${id}`);
    }
    return (
            <div className="col-lg-4 col-md-6">
                <div className="service_area_sub_box">
                    <div className="service_area_img">
                        <img  src={img} alt="" />
                    </div> 
                    <h5 className="Header_title" onClick={HandleService}>{title}</h5>
                    <p>{details.substring(0,100)}...</p>
                    <button onClick={HandleService} className="btn_custom">Read More</button>
                </div>
            </div>

    );
};

export default ServiceData;
