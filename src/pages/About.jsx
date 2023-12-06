import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import profilePic from '../assets/profilepic.png';
import '../styles/About.css';


function About() {
return (
    <>
    <div className='header-wraper'>
        <div className='main-info'>
            <h1>Full Stack Web Developer</h1>
            <p className='pHeader'> Hi, I'm Yemny Feliz, an enthusiastic developer with backend and frontend experience </p>
        </div>
    </div>

    <Container id="about" className="about-section">
        <h2 className='aboutH'>About Me</h2>
        <Row className="align-items-center">
            <Col md={6} className="text-center">
            <img src={profilePic}
            id="profileImg"
                    alt='picture of me'
                    className='img-fluid rounded-circle'></img>
            </Col>
            <Col md={6}>
                <h3>Welcome!</h3>
                <p>I am a developer who enjoys learning new things and taking up new challenges.
                    I started this journey because I was curious about how web applications are built. Therefore, I enrolled in a full stack web deveoping program and I was immediately fascinated with all the great things one can create.
                    I am excited to keep learning about the latest technologies that not only are fun but also solve problems and make development user-friendlier.
                </p>
            </Col>
        </Row>
    </Container>


</>

)
}
export default About;