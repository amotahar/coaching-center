import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Navigation from '../Navigation/Navigation';


const Home = () => {
    const [courses , setCourses] = useState([])

    useEffect(()=>{
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
        
        <Header></Header>

        <div>
            <h1 className="display-3 fw-bold py-5 ">Our Best Courses</h1>
            
        </div>
            <div className="container my-5">
            <Row xs={1} md={2} lg={4} className="g-4">

{
    courses.map(course =>  (
        <Col>
        <Card>
          <Card.Img fluid variant="top" src={course.img} />
          <Card.Body>
            <Card.Title>Name: {course.name}</Card.Title>
           <h5>Org: {course.organization}</h5>
           <Rating className="text-warning"
            initialRating={course.rating}
  emptySymbol="far fa-star"
  fullSymbol="fas fa-star"
/>
           <p>Price: ${course.price}</p>
           <button className="btn btn-outline-primary">Buy Course</button>
          </Card.Body>
        </Card>
      </Col>
    )
       
    )
}
</Row>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Home;






//   {Array.from({ length: 4 }).map((_, idx) => (
//     <Col>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}