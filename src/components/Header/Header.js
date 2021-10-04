import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand  className="ms-5 fs-1"><i class="fas fa-book-reader"></i>Skill IT</Navbar.Brand>
    <Nav
      className="mr-auto my-2 my-lg-0 ms-5"
      style={{ maxHeight: '100px' }}
      navbarScroll
    > 
    
      
    
      <Link to="/home" className="ms-5 text-primary">Home</Link>
      <Link to="/courses" className="ms-5 text-primary">Courses</Link>
      <Link to="/about" className="ms-5 text-primary">About Us</Link>
      <Link to="/contact" className="ms-5 text-primary">Contact</Link>
      
     
      
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2 ms-5"
        aria-label="Search"
      />
      <Button variant="outline-success" className="ms-2">Search</Button>
    </Form>
  
</Navbar>
    );
};

export default Header;