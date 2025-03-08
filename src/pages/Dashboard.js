import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Image Carousel */}
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uDev4DGNpBmtSKy7XUvZZxiYs3z63TWUKQ&s"
            alt="First slide"
            style={{ maxHeight: '60vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvDZzaStMbteg7Ycb21N1bZiSNPySpNWWNw&s"
            alt="Second slide"
            style={{ maxHeight: '60vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffyqbJGp_YX8z6HkWSzdE73boEFnyFwWVMw&s"
            alt="Third slide"
            style={{ maxHeight: '60vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Dashboard Content */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-4">Project Dashboard</h1>
          <Link to="/create-project" className="btn btn-primary btn-lg">
            + New Project
          </Link>
        </div>

        <div className="mb-5">
          <Link to="/project-info" className="btn btn-outline-info">
            📋 View Project Details
          </Link>
        </div>
        
        {/* Projects Grid */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project._id}>
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YwgZ9_dIIqsmDKT7lRiu3s8BTimN9sotQA&s" 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description?.substring(0, 100)}...
                  </Card.Text>
                  <Link 
                    to={`/project/${project._id}`}
                    className="btn btn-primary mt-auto align-self-start"
                  >
                    View Details
                  </Link>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

// New Project Info Component

export default Dashboard;
