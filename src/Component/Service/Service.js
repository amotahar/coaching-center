import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Service.css'

const Service = () => {

    const [otherCourses, setOtherCourses] = useState([])

    useEffect(()=>{
        fetch('./otherCourse.JSON')
        .then(res =>res.json())
        .then(data => setOtherCourses(data))
    },[])

    
    return (

    
        <div>
     
     <Header></Header>
            <div className="display-2 fw-bold py-5">Our Other <span className="text-warning">Courses</span></div>
        
            <Row xs={1} md={2} lg={3} className="g-5">

        {
            otherCourses.map(courses => (

                <Col >
                <Card className="card">
                
                 
                 <Card.Img className="course-img" variant="top" src={courses.img} />
               
                 <hr />
                 <Card.Body >
                    <Card.Title><h2>Name: {courses.name}</h2></Card.Title>
                    <h4>Org: {courses.organization}</h4>
                    <ul>
                        <li className="fw-bold"><i className="fas fa-long-arrow-alt-right"></i> Price: <span className="text-danger"><i class="fas fa-dollar-sign"></i> {courses.price}</span></li>
                        <li className="fw-bold"><i className="fas fa-long-arrow-alt-right"></i> Total Hour: <span className="text-danger"><i class="far fa-clock"></i> {courses.hour}</span></li>
                        <li className="fw-bold"><i className="fas fa-long-arrow-alt-right"></i> Total Vedio: <span className="text-danger"><i class="fas fa-video"></i> {courses.video}</span></li>
                        <li className="fw-bold"><i className="fas fa-long-arrow-alt-right"></i> Total Students: <span className="text-danger"><i class="fas fa-users"></i> {courses.students}</span></li>
                        <li className="fw-bold"><i className="fas fa-long-arrow-alt-right"></i> Friendly: <span className="text-danger">{courses.friendly}</span></li>
                    </ul>
                    <Rating
                    className="text-warning pb-4"
                        initialRating={courses.rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                        />
                        <br />
                        <div class="d-grid gap-2 col-12 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  
</div>
                  </Card.Body>
               
                
                </Card>
              </Col>
            ))
        }

</Row>


<Footer></Footer>

        </div>
    );
};

export default Service;<h4>This is Service</h4>







// {/* <Row xs={1} md={2} className="g-4">
// {Array.from({ length: 4 }).map((_, idx) => (
//   <Col>
//     <Card>
//       <Card.Img variant="top" src="holder.js/100px160" />
//       <Card.Body>
//         <Card.Title>Card title</Card.Title>
//         <Card.Text>
//           This is a longer card with supporting text below as a natural
//           lead-in to additional content. This content is a little bit longer.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </Col>
// ))}
// </Row> */}