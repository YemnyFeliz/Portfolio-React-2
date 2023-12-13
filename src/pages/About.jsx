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
                <Row className="align-items-center" >
                    <Col md={6} className="text-center">
                        <img src={profilePic}
                            id="profileImg"
                            alt='picture of me'
                            className='img-fluid '></img>
                    </Col>
                    <Col md={6}>
                        <h3>Welcome!</h3>
                        <p>I am a developer who enjoys learning new things and  transforming ideas into functional-user freindly digital web applications.
                            I like taking up new challenges that build my skills and finding solutions to problems.
                            Collaborations are a great opportunity to share knowledge and create fantastic applications.
                            I started this journey because I was curious about how web applications are built.
                            Once I started working on projects and deepening into the development world, there was no coming back.
                            This path offers me countless ways to be creative and push myself as technology continues to grow.
                            This is exciting and I can't wait to see what's next.
                            
                        </p>
                    </Col>
                </Row>
            </Container>


        </>

    )
}
export default About;