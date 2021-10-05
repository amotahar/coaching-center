import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const navStyle={
        textDecoration:"none",
        color:"white",
        padding:"10px"
    }
    return (
        <Navbar bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand to="/home">Programming Academy</Navbar.Brand>
        <Nav className="me-auto" >
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/home">Home</NavLink>
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/service">Service</NavLink>
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/training">Training</NavLink>
          <NavLink style={navStyle}  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/about">About Us</NavLink>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Navigation;