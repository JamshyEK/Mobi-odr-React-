import React from 'react';
import '../App.css';
import './BrandNav.css'
//import brandimg from '../images/mobi.png';
import brandimgsec from '../images/mobisec.png';
import {Navbar,Button,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

 function BrandNav() {
   return (
    
        <div >
<>

    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
    <Link to="/"> 
       <Navbar.Brand>
      <img
        alt=""
        src={brandimgsec}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
     <b className="brand-name" >Mobi ODR</b> 
    </Navbar.Brand>
    </Link>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav ">
    <Nav className="mr-auto">
 
    </Nav>
    <Nav>
    <Link to="/Signup">
  <Button  variant="dark" size="sm">Sign Up</Button>
  </Link>
  <Link to="/Login">
    <Button  variant="outline-dark" size="sm">Log In</Button>
  </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={brandimg}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
     <b>Mobi ODR</b> 
    </Navbar.Brand>
    
  <div className="float-sm-right">
  <Form inline >
  <Link to="/Signup">
  <Button  variant="light" size="sm">Sign Up</Button>
  </Link>
    <Link to="/Login">
    <Button  variant="outline-light" size="sm">Log In</Button>
    </Link>
  </Form>
  </div>
 
  </Navbar> */}
</>
     
     </div>
 
    
   );
 }

export default BrandNav;