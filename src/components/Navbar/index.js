import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './navbar.css';

const fancyHeader = (props) => {
    return (
        <>
            <Navbar collapseOnSelect bg="top" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home" onClick={() => { props.changePage("Home") }}>Khanh Tran</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#home" onClick={() => { props.changePage("Home") }}>Home</Nav.Link>
                            <Nav.Link href="#about" onClick={() => { props.changePage("About") }}>About</Nav.Link>
                            <Nav.Link href="#skills" onClick={() => { props.changePage("Skills") }}>Skills</Nav.Link>
                            <Nav.Link href="#portfolio" onClick={() => { props.changePage("Portfolio") }}>Portfolio</Nav.Link>
                            <Nav.Link href="#contact" onClick={() => { props.changePage("Contact") }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default fancyHeader;