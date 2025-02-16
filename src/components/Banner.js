import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FileEarmarkPdf } from "react-bootstrap-icons";
import profileImg from "../assets/img/josua-siregar.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
// import cvFile from "../assets/files/";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full stack Developer", "Web Developer", "Mobile Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const [, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portofolio</span>
                                    <h1>{'Hi I\'m Josua Siregar'}<br /><span className="wrap"> {text}</span></h1>
                                    <p> I am a results-oriented Full Stack Developer with a strong background in
                                        software development and system architecture. I am proficient in JavaScript, PHP, Python,
                                        Go, Java (Spring) and Dart (Flutter), with hands-on experience in RESTful APIs, microservices
                                        and database optimization. During my academic and internship experiences, I have
                                        developed scalable and high-performance frontend and backend solutions using frameworks
                                        such as React, Nest, Django and Laravel. I am committed to delivering robust, efficient, and
                                        secure systems to drive organizational and project success. </p>
                                    <button className="vvd"> Download CV
                                        <a href='' download>
                                            <FileEarmarkPdf size={25} />
                                        </a>
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={profileImg} alt="" style={{ width: '75%' }} />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}