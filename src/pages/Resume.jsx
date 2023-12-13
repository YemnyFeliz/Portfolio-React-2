import React from 'react';
import '../styles/Resume.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBIcon } from 'mdb-react-ui-kit';
import ResumeLink from '../assets/YemnyFelizResume.pdf';



function Resume() {
    return (
        <>



            <div className='wrapper'>
                <Container className='content' >
                    <div className="container mt-5 text-center">
                        <h1>Resume</h1>
                        <p>
                            <a id='pdf'href={ResumeLink} download={ResumeLink}>
                                Resume.pdf
                            </a>
                        </p>

                    </div>
                    <Row xs={1} sm={1} md={2} lg={2} xxl={3} >
                        <Col sm >
                            <Card className="cards">
                                <Card.Body>
                                    <ListGroup className="groupskills mt-3 mb-3">

                                        <ListGroup.Item className='skills border-0'>
                                            CSS
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                        <MDBIcon className='me-2' fab icon="bootstrap" size='lg'/>
                                            Bootstrap
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'> 
                                        Responsive design
                                        </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                        <MDBIcon className='me-2' fab icon="js" size='lg'/>
                                            JavaScript
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                        <MDBIcon className='me-2' fab icon="react" size='lg'/>
                                            React JS
                                            </ListGroup.Item>

                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card className="cards" style={{ width: '50rem' }}>
                                <Card.Body>
                                    <ListGroup className="groupskills mt-3 mb-3">

                                        <ListGroup.Item className='skills border-0'>
                                        <MDBIcon className='me-2'  fab icon="node-js" size='lg' />
                                            Node.js
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            Express.js
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            SQL
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            MongoDB
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            GraphQL
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            MERN
                                            </ListGroup.Item>

                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card className="cards" style={{ width: '50rem' }}>
                                <Card.Body>
                                    <ListGroup className="groupskills mt-3 mb-3">

                                        <ListGroup.Item className='skills border-0'>
                                        <MDBIcon className='me-2' fab icon="git" size='lg'/>
                                            Git
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            REST API
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            JQuery
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            Object-Oriented Programming (OOP)
                                            </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                             Object-Relational Mapping (ORM)
                                             </ListGroup.Item>

                                        <ListGroup.Item className='skills border-0'>
                                            Progressive Web Applications (PWA)
                                            </ListGroup.Item>
                                    </ListGroup>
                                    
                                </Card.Body>
                            </Card></Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}
export default Resume;