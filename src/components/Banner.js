import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, FileEarmarkPdf } from "react-bootstrap-icons";
import profileImg from "../assets/img/josua-siregar.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import cvFile from "../assets/files/CV-Backend Developer_Josua Siregar.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Backend Engineer", "Web Developer", "Mobile Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const [index, setIndex] = useState(1);

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
                                    <p> As an experienced back-end engineer, my responsibilities include designing, developing, and maintaining the back end of web and mobile applications. I ensure seamless integration between the front and back end and actively participate in project development.<br /><br />
                                        With strong skills in back-end programming languages such as JavaScript (Node.js), PHP, Java, Python, Dart, and Golang, as well as extensive experience with frameworks such as Laravel, I can make significant contributions to project development. In addition, I also have experience in front-end development using Flutter and React JS, as well as in database management using SQL and Firebase.<br /><br />
                                        I prioritize applying best practices in software development, including creating scalable and efficient systems, effective database management, and rigorous testing. Through my commitment to quality, I have delivered reliable back-end solutions, improved overall system performance, and provided positive user experiences.</p>
                                    {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button> */}
                                    <button className="vvd">Download CV
                                        <a href={cvFile} download>
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
                                    <img src={profileImg} alt="" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}