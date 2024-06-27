import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, FileEarmarkPdf } from "react-bootstrap-icons";
import profileImg from "../assets/img/josua-siregar.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import cvFile from "../assets/files/CV_Josua Siregar.pdf";

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
                                    <p> I am Josua Siregar, a final year Information Technology student at Del Institute of Technology with a career as a Back-End Engineer. During my studies, I have contributed to various software development projects, including my final project on Product Recommendation for an e-commerce website, where I served as the lead developer. I designed and developed a recommendation system integrated with front-end and back-end, using Python for data preprocessing and building recommendation algorithm models. By mastering the back-end programming of Node.js, PHP, Java, Go and Laravel frameworks, as well as React JS framework and SQL database management, I managed to achieve error evaluation using MAE and RMSE below 1, improving the accuracy of product recommendations for users. My expertise includes scalable system design, optimal algorithm implementation, effective database management, and rigorous testing, all contributing to improved system performance and better user experience.</p>
                                    {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button> */}
                                    <button className="vvd"> Download CV
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