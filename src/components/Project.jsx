import '../styles/Project.css';
import { Card, Button } from 'react-bootstrap';

const Project = ({ title, description, image, link, repo }) => {
    return (
      <Card>
        <Card.Img src={image} alt={`${title} project`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="button-container">
            <Button className="button btn-secondary" href={link} target="_blank" rel="noopener noreferrer">
              {/* <CgWebsite className="icon m-1"/> */}
              web
            </Button>
            <Button className="button btn-secondary" href={repo} target="_blank" rel="noopener noreferrer">
              {/* <FaGithub className="icon"/> Github */}
              GitHub
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  };

  export default Project;




