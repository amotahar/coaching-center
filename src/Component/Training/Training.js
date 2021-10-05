import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Training.css'

const About = () => {
    return (
       
      <div>
         <Header></Header>

<Container>
                    <div className="about-section ">

<div className="py-5 about-title">
    <h2>Need online training for 10+ employees?
Try The Academy for Business</h2>
</div>

<div className="card-container py-5">

<div className="single-cart">
<div>
   <i class="fas fa-laptop-code"></i>
</div>
<h4>Industry-leading online courses & career tracks</h4>
   </div>

<div className="single-cart">
<div>
<i class="fas fa-chalkboard-teacher"></i>
</div>
<h4>Superior learning experience with support</h4>
   </div>
<div className="single-cart">
<div>
<i class="fas fa-chart-pie"></i>
</div>
<h4>Seamless team management & analytics</h4>
   </div>

<div className="single-cart">
<div>
<i class="fas fa-file-invoice-dollar"></i>
</div>
<h4>Flexible course-bundling & payment terms</h4>
   </div>
</div>

<div className="">
<button className="discount-btn">Get upto 80% discount on team enrollment</button>
</div>
</div>
        </Container>


        <Footer></Footer>
      </div>
    );
};

export default About;