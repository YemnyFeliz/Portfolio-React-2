import React, { useState } from 'react';
//import { useForm } from "react-hook-form";
import '../styles/Contact.css';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import isValidEmail from '../utils/isValid';



function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !text) {
      alert("All fields are required, please provide value");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

  };

  return (
    <div className='contact'>
      <Container>
        <h1>Contact Me</h1>

        <Row className="justify-content-center align-items-center">
          <Col className=''>
            <Form className='form'
              onSubmit={handleSubmit}
            >

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control size="lg" type="text"
                  value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="" size="lg" type="email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control className="text" as="textarea"
                  value={text} onChange={(e) => setText(e.target.value)}
                  rows={3} />
              </Form.Group>

              <Button variant="dark" type="submit"
                size="lg" className='submitbtn'>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>

  );
};
export default Contact;