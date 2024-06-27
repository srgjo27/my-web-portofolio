import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" className="project-image" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br />
                    <span>{url}</span>
                </div>
            </div>
        </Col>
    )
}