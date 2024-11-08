import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BasicInfo = ({ name, location, email, github, summary }) => (
    <Container className="my-5">
        <Row className="justify-content-center">
            <Col md={8}>
                <Card className="p-4">
                    <Card.Body>
                        <Card.Title as="h1">{name}</Card.Title>
                        <Card.Text>{summary}</Card.Text>
                        <Card.Text>
                            <strong>Location:</strong> {location} <br />
                            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a> <br />
                            <strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default BasicInfo;
