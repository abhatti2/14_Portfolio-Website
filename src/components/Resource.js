import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Resource = ({ title, image, summary, link }) => (
    <Card className="mb-4">
        {image && (
            <Card.Img
                variant="top"
                src={image}
                alt={title}
                style={{ width: '100px', height: 'auto', objectFit: 'cover' }}
            />
        )}
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{summary}</Card.Text>
            <Button variant="info" href={link} target="_blank">
                Learn More
            </Button>
        </Card.Body>
    </Card>
);

export default Resource;
