import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import "./Course.css"

const Course = () => {
    const [courses, setcourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setcourses(data))
    }, [])
    return (
        <div>
            <h1 className="text-center">Our total Course:{courses.length}</h1>
            {
                courses.map(course => <Courses course={course}
                    key={course.id}></Courses>)
            }
        </div>
    );
};

export default Course;