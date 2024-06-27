import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        Josua Siregar
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/josua-siregar/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/srgjo27"><img src={navIcon4} alt="" /></a>
                            <a href="https://www.instagram.com/josua.srg"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright 2023 - by Josua Siregar</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
