import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from '../Imagenes/linkedin.png';
import gitHub from '../Imagenes/github.png'; 
import facebook from '../Imagenes/facebook.png';
import cerebro from '../Imagenes/cerebro.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {
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
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <div className="iconos">
            <img src={cerebro} alt="Logo"/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'Inicio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'Projecto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'Unete a nosotros' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon d-flex">
              <a href="https://www.linkedin.com/in/jesus-alejandro-rodriguez-renteria-3210851ba/"><img src={linkedin} alt="" /></a>
              <a href="https://github.com/jesusjarr30"><img src={facebook} alt="" /></a>
              <a href="https://github.com/jesusjarr30"><img src={gitHub} alt="" /></a>
            </div>
            <Link to="/Login">
              <button className="vvd" onClick={() => console.log('connect')}><span>Login</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}