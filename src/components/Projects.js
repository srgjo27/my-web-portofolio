import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project_model from "../model/Projects";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const { projects1, projects2 } = project_model;

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>These skills have been applied in leading and collaborating on challenging projects, where I have not only improved my problem-solving and database management abilities but also produced innovative and cutting-edge solutions.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third" disabled>
                                                    Three
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects1.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index}{...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index}{...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Three</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}