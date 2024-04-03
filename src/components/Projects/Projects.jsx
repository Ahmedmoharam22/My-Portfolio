import React from 'react'
import colorSharp2 from '../../assest/images/color-sharp2.png'
import { Row, Col, Tab, Nav, Container } from "react-bootstrap";
import 'animate.css';
import './projects.css'
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import { ProjectsData } from '../Global/Data';
// import '/projects.css'

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>There Ara Web Devlopment Projects.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">HTML5 , CSS3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">BOOTSTRAP , JS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">REACT JS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Row>
                          {
                            ProjectsData.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Row>
                          {
                            ProjectsData.filter(proj => !proj.Language.includes('Bootstrap', 'JavaScript', 'React')).map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Row>
                          {
                            ProjectsData.filter(proj => proj.Language.includes('Bootstrap', 'JavaScript') && !proj.Language.includes('React')).map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Row>
                          {
                            ProjectsData.filter(proj => proj.Language.includes('React')).map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects