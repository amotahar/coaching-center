import React from 'react';
import './Courses.css'

const Courses = (props) => {
    const { name, duration, modeltest, price, img } = props.course
    return (
        <div className="course-part">
            <article className="course-info">
                <div className="couse-photo">
                    <img src={img} alt="" />
                </div>
                <div className="course-information">
                    <h4>Course Name:{name}</h4>
                    <p>Duration: <small className="text-info"> {duration} Days</small></p>
                    <h5>Price:{price} taka</h5>
                    <p>Model Test: {modeltest}</p>
                    <button>Order Now</button>
                </div>
            </article>



        </div>
    );
};

export default Courses;