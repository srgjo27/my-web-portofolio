import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import model_experiences from '../model/Experience';

export const WorkExperience = () => {
    const experiences = model_experiences;

    return (
        <Container className="my-5">
            <h2 className="text-center text-light pb-3">Experiences</h2>
            <Row>
                {experiences.map((experience, index) => (
                    <Col key={index} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm experience-card bg-dark text-light">
                            <Card.Body>
                                <Row>
                                    <Col xs={3} className="d-flex align-items-center">
                                        <Image src={experience.logo || 'https://img.icons8.com/?size=100&id=69794&format=png&color=000000'} fluid rounded />
                                    </Col>
                                    <Col xs={9}>
                                        <Card.Title className="text-primary">{experience.company}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-light">
                                            {experience.position}
                                        </Card.Subtitle>
                                        <Card.Text className="text-secondary">{experience.date}</Card.Text>
                                    </Col>
                                </Row>
                                <hr className="my-3" style={{ borderTop: '3px solid #495057' }} />
                                <ul className="list-unstyled">
                                    {experience.description.map((item, index) => (
                                        <li key={index} className="d-flex align-items-start mb-2 text-secondary">
                                            <FontAwesomeIcon icon={faCheckCircle} className="me-2 text-primary mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};