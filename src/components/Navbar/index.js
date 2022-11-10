import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import './navbar.css';

const fancyHeader = (props) => {
    return (
        <>
            <Navbar className="fancyNav" collapseOnSelect expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand Image className="brandLogo" href="#home" onClick={() => { props.changePage("Home") }}><Image className="logoImage" thumbnail src="https://raw.githubusercontent.com/Khanh-T-Tran/myportfolio-react/main/src/assets/logos/dark/TK-logo-dark-512x%20(2).png" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className="tabs" href="#home" onClick={() => { props.changePage("Home") }}>Home</Nav.Link>
                            <Nav.Link className="tabs" href="#skills" onClick={() => { props.changePage("Skills") }}>Skills</Nav.Link>
                            <Nav.Link className="tabs" href="#portfolio" onClick={() => { props.changePage("Portfolio") }}>Portfolio</Nav.Link>
                            <Nav.Link className="tabs" href="#contact" onClick={() => { props.changePage("Contact") }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default fancyHeader;