import React from 'react'
import './footer.css'
import { Container, Row, Col } from "react-bootstrap";
import { NavbarData } from '../Data';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


const Footer = () => {
  const renderTooltip = (title) => (
    <Tooltip id="tooltip">{title}</Tooltip>
  );
  return (

    <footer className="footer">
      <Container>
        <div className="text-center">

          {/* <div  className="text-center text-sm-end"> */}
          <div className="social-icon  my-5">
            {NavbarData?.map((icon) => (
              // <a href={icon.link} key={icon.id} title={icon.title}>
              //     {icon.icon}
              // </a>
              <OverlayTrigger
                key={icon.id}
                placement="bottom"
                overlay={renderTooltip(icon.title)}
              >
                <a href={icon.link}>
                  {icon.icon}
                </a>
              </OverlayTrigger>
            ))}
            <p>Copyright 2023. All Rights Reserved</p>

          </div>
          {/* </div> */}
        </div>
      </Container>
    </footer>
  )
}

export default Footer