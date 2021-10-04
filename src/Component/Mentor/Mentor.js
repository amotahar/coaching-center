import React, { useEffect, useState } from 'react';
import Mentors from '../Mentors/Mentors';
import "./Mentor.css"

const Mentor = () => {
    const [mentors, setmentors] = useState([])
    useEffect(() => {
        fetch("./teacher.json")
            .then(res => res.json())
            .then(data => setmentors(data))
    }, [])
    return (
        <div>
            <h2 className="text-center">Our Mentor:{mentors.length}</h2>
            {
                mentors.map(mentor => <Mentors mentor={mentor}
                    key={mentor.id}></Mentors>)
            }
        </div>
    );
};

export default Mentor;