import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../../assest/images/logo.svg'
// import navIcon1 from '../../../assest/images/nav-icon1.svg'
// import navIcon2 from '../../../assest/images/nav-icon2.svg'
// import navIcon3 from '../../../assest/images/nav-icon3.svg'
// import navIcon4 from '../../../assest/images/Github.svg'
// import navIcon5 from '../../../assest/images/whatsapp-ffffff.svg'
// import navIcon6 from '../../../assest/images/telegram-svgrepo-com (2).svg'
import { HashLink } from 'react-router-hash-link';
import './navbar.css'
import { NavbarData } from "../Data";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { infoMsg } from "../../Toast/Toast";




const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    {/* <Navbar.Brand href="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggle-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mx-5 navBarLinks">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className="social-icon">
                                {NavbarData?.map((icon) => (
                                    // <a href={icon.link} key={icon.id} title={icon.title}>
                                    //     {icon.icon}
                                    // </a>
                                    <OverlayTrigger
                                        key={icon.id}
                                        placement="bottom"
                                        // overlay={renderTooltip(icon.title)}
                                        overlay={
                                            <Tooltip id={`tooltip-${icon.id}`} style={{ zIndex: 20 }}>
                                                {icon.title}
                                            </Tooltip>
                                        }
                                    >
                                        <Nav.Link href={icon.link} target='_blank'>
                                            {icon.icon}
                                        </Nav.Link>
                                    </OverlayTrigger>
                                ))}
                            </div>
                        </span>
                        <a href="./files/Ahmed Moharam CV.pdf" target="_blank" download>
                            <button className="vvd"><span>Download CV</span></button>
                        </a>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>)
}

export default NavBar