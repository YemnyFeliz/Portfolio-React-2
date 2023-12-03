import React from 'react';
import Project from '../components/Project';
import projects from '../utils/projects';

import { Container, Row, Col } from 'react-bootstrap';


function Porfolio() {
return (
    <Container className="portfolio-section" id="portfolio">
    <h2>Projects</h2>
    <Row>
      {projects.map((project, index) => (
        <Col key={index} sm={6} md={4} lg={4}>
          <Project
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            repo={project.repo}
          />
        </Col>
      ))}
    </Row>
  </Container>
)
}
export default Porfolio;