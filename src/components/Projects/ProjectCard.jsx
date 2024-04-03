import { Col, Stack } from "react-bootstrap";

export const ProjectCard = ({ title, description, img, linkDemo, linkGithub }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx text-center">
                <img src={img} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="d-flex justify-content-evenly container mt-4">
                        <a href={linkDemo} target='_blank'>
                            <button className="btn proj-imgbx-btns bg-light border-light">View Demo</button>
                        </a>
                        <a href={linkGithub} target='_blank'>
                            <button className="btn proj-imgbx-btns bg-light border-light">GitHub Link</button>
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    )
}
