import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import '../styles/Header-nav.css';
import '../App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';


const Navigation = () => {
   
    return (
        <Router>
            
                <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary" >
                    <Container>
                        <Navbar.Brand  className='brand' href="/">Yemny Feliz</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" 
                        // onClick={() => setShowLinks(!showLinks)}
                        className='ms-auto my-2 my-md-0' style={{ maxHeight:'100px', backgroundColor:'#f6a6bb'}}
                        navScroll
                        
                        />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>


                                <Nav.Link as={Link} to="/">About</Nav.Link>



                                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>



                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>



                                <Nav.Link as={Link} to="/resume">Resume</Nav.Link>



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
               
                <div>
                    <Routes>
                        <Route path="/" element={<About />}>
                        </Route>

                        <Route path="/portfolio" element={<Portfolio />}>
                        </Route>

                        <Route path="/contact" element={<Contact />}>
                        </Route>

                        <Route path="/resume" element={<Resume />}>
                        </Route>

                    </Routes>
                </div>
        </Router>

    )
}

export default Navigation;