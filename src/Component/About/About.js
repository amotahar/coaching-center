import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'



const About = () => {
    return (
        <div>

         <Header></Header>




        <Container>

        
        <div className="about-us">

            <div className="single-about">
                <div>
                <i class="fas fa-phone-square-alt"></i>
                </div>
                <div>
                    <h3>+02434343411</h3>
                    <p>We are open 10am to 10pm without friday.</p>
                </div>
            </div>
            <div className="single-about">
                <div>
                <i className="far fa-envelope"></i>
                </div>
                <div>
                    <h3>programmingacademy@gmail.com</h3>
                    <p>We will respond to your mail within business hour </p>
                </div>
            </div>
            <div className="single-about">
                <div>
                <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <h3>Nilkhet, Dhaka</h3>
                    <p>We are open 10am to 10pm</p>
                </div>
            </div>
            
        </div>


            </Container>


        <Row>

        <Col sm={12} lg={6}>
           <div className="mt-5">
               <h2 className="display-4 ">Head Of Department</h2>
               <ul>
                   <li className="fw-bold fs-5">CEO: Mothar Hossain</li>
                   <li><i class="fas fa-phone-alt text-warning"></i>:  +01010101</li>
                   <li></li>
                   
               </ul>
           </div>

           <div className="mt-5">
               <h2 className="display-4">Mouchak Branch</h2>
               <ul>
                   <li className="fs-5 fw-bold"><i class="fas fa-map-marker-alt text-warning"></i> Mouchak,Dhaka</li>
                   <li><i class="fas fa-phone-alt text-warning"></i>: +2929238383</li>
                   <li></li>
               </ul>
           </div>
        </Col>




        <Col sm={12} lg={5} className="pt-5">
         
         <Form  className="form ">

             <h2 className="display-3 text-warning pt-5">Registration Form</h2>
                
            <input className="inp p-2 my-4" type="text" lg placeholder="Enter Your First Name"/>
             <br />

             
             <input className="inp p-2 my-4" type="text" placeholder="Enter Your Last Name" />

             <input className="inp p-2 mt-4" type="password" name="" id="" placeholder="Password" />
            <br />

            <textarea className="mt-5 " name="" id="" cols="70" rows="10"></textarea> <br />

            <div class="d-grid gap-2 col-8 mx-auto py-3">
  <button class="btn btn-primary" type="button">Button</button>
  
</div>

         </Form>
        </Col>

        </Row>


    
        <Footer></Footer>
        </div>
    );
};

export default About;