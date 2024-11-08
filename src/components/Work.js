import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const Work = ({ title, description, image, link, techList }) => (
    <Card className="mb-4">
        {image && (
            <Card.Img
                variant="top"
                src={image}
                alt={title}
                style={{ width: '180px', height: 'auto', objectFit: 'cover' }}
            />
        )}
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="mb-2">
                {techList.map((tech, index) => (
                    <Badge pill bg="primary" className="me-1" key={index}>
                        {tech}
                    </Badge>
                ))}
            </div>
            <Button variant="primary" href={link} target="_blank">
                View Project
            </Button>
        </Card.Body>
    </Card>
);

export default Work;
