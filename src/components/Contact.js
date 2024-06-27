import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Whatsapp, Telegram, Envelope } from "react-bootstrap-icons";
import contactImg from "../assets/img/josua-siregar.jpg";

export const Contact = () => {
    const whatsappNumber = "+6281324773927";
    const telegramUsername = "yourtelegramusernam"; 
    const emailAddress = "josuasiregar0103@gmail.com"; 

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" className="contact-img" />
                    </Col>
                    <Col md={6}>
                        <h3>Say, Hi! 👋</h3>
                        <p>If you have any questions or just want to connect, feel free to reach out to me on WhatsApp, Telegram, or Email. I'm always happy to chat and help out in any way I can!</p>
                        <p>Click the buttons below to start a conversation:</p>
                        <div className="button-group">
                            <Button
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                className="contact-btn whatsapp-btn"
                            >
                                <Whatsapp size={20} /> Connect on WhatsApp
                            </Button>
                            <Button
                                href={`https://t.me/${telegramUsername}`}
                                target="_blank"
                                className="contact-btn telegram-btn"
                            >
                                <Telegram size={20} /> Connect on Telegram
                            </Button>
                            <Button
                                href={`mailto:${emailAddress}`}
                                target="_blank"
                                className="contact-btn email-btn"
                            >
                                <Envelope size={20} /> Send an Email
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
