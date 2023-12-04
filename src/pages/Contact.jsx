import React from 'react';
import '../styles/Contact.css';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Contact() {
return (
    <div className='contact'>
    <Container>
        <h1>Contact Me</h1>
        
    <Row className="justify-content-center align-items-center">
    <Col className=''>
    <Form className='form'>

      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="your name" />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="" size="lg" type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control className="textarea"as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>

    );
};
export default Contact;