import React, { useState } from 'react';
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
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    text: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    text: '',
  });
  const handleInputChange = (field, value) => {
    if (touchedFields[field]) {
      validateField(field, value);
    }
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'text':
        setText(value);
        break;
      default:
        break;
    }
  };
  const handleBlur = (field) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true,
    });
    validateField(field, getFieldValue(field));
  };
  const validateField = (field, value) => {
    let errorMessage = '';
    switch (field) {
      case 'name':
        errorMessage = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        errorMessage = !isValidEmail(value) ? 'Please enter a valid email address' : '';
        break;
      case 'text':
        errorMessage = value.trim() === '' ? 'Your message is required' : '';
        break;
      default:
        break;
    }
    setErrorMessages({
      ...errorMessages,
      [field]: errorMessage,
    });
  };

  const getFieldValue = (field) => {
    switch (field) {
      case 'name':
        return name;
      case 'email':
        return email;
      case 'text':
        return text;
      default:
        return '';
    }
  };

  const isFormValid = () => {
    const fields = ['name', 'email', 'text'];
    let isValid = true;
    fields.forEach((field) => {
      const value = getFieldValue(field);
      validateField(field, value);
      if (errorMessages[field] !== '') {
        isValid = false;
      }
    });
    return isValid;
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Please fill in all required fields with valid values.');
      return;
    }

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
                <Form.Label className='textField'>Name:</Form.Label>
                <Form.Control size="lg" type="text"
                  value={name} 
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => handleBlur('text')}
                  placeholder="your name" />
                   {touchedFields.text && errorMessages.text && (
                  <p className="error-message">{errorMessages.text}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='textField'>Email address:</Form.Label>
                <Form.Control className="" size="lg" type="email"
                  value={email} 
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => handleBlur('text')}
                  placeholder="name@example.com" />
                   {touchedFields.text && errorMessages.text && (
                  <p className="error-message">{errorMessages.text}</p>
                )}
                  
              </Form.Group>


              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control className="text" as="textarea"
                  value={text} 
                  onChange={(e) => handleInputChange('text', e.target.value)}
                  onBlur={() => handleBlur('text')}
                  placeholder="Your message"
                  rows={3} />
                  {touchedFields.text && errorMessages.text && (
                  <p className="error-message">{errorMessages.text}</p>
                )}
              </Form.Group>

              <Button variant="secondary" type="submit"
                size="lg" className='submitbtn'>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>

  );
};
export default Contact;