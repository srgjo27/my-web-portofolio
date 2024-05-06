import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Website  Pemandian Air Soda Taurutung",
            description: "",
            imgUrl: projImg1,
            url: "https://github.com/srgjo27/air-soda--tarutung-website",
        },
        {
            title: "IT Del Canteen Website",
            description: "",
            imgUrl: projImg2,
            url: "https://github.com/srgjo27/Canteen-IT-Del-Website",
        },
        {
            title: "LokerKu Website",
            description: "",
            imgUrl: projImg3,
            url: "https://github.com/srgjo27/LokerKu",
        },
        {
            title: "SIRAM",
            description: "Mobile Application",
            imgUrl: projImg4,
            url: "",
        },
        {
            title: "Delhub Mobile-Based Application",
            description: "",
            imgUrl: projImg5,
            url: "https://github.com/marloxxx/delhub",
        },
        {
            title: "Ito Humbang",
            description: "Mobile Application",
            imgUrl: projImg6,
            url: "",
        }
    ]

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
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index}{...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Two</p>
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