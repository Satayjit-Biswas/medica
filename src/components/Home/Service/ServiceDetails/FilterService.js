import React from 'react';

const FilterService = (props) => {
    const {id,details,img,title} =  props.filterdata;
    return (
        <div className="col-lg-8">
                <div className="service_area_sub_box text-center">
                    <div className="service_area_img">
                        <img  src={img} alt="" />
                    </div> 
                    <h5 > <a href="/">{title}</a></h5>
                    <p>{details}</p>
                </div>
            </div>
    );
};

export default FilterService;