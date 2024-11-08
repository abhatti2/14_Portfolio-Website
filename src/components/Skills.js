import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Skills = ({ description, languages, tools }) => (
    <Container className="my-5">
        <Row>
            <Col>
                <h3>Skills</h3>
                <p>{description}</p>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <h4>Languages / Frameworks</h4>
                <ListGroup>
                    {languages.map((lang, index) => (
                        <ListGroup.Item key={index}>{lang}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col md={6}>
                <h4>Tools</h4>
                <ListGroup>
                    {tools.map((tool, index) => (
                        <ListGroup.Item key={index}>{tool}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    </Container>
);

export default Skills;
