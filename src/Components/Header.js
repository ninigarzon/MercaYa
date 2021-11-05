import React, { useContext, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ImgHeader from "../assets/img/header-ico.svg";
import ImgUser from "../assets/img/user-circle.svg";
import Context from '../context/context';

function Header() {
    const { login, user } = useContext(Context);

    useEffect(() => {
        login();
    }, []);

    useEffect(() => {
        console.log(user)
    }, [user]);

    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={ImgHeader} alt="Header" style={{ width: "70%" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="mr-5">
                            <NavDropdown title="Nuestros Servicios" id="collasible-nav-dropdown" style={{ fontFamily: "OpenSansCondensed-light", fontSize: "18px" }}>
                                <NavDropdown.Item href="#action/3.1">Lista de compras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Productos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Marcas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <img src={ImgUser} />
                            <Nav.Link href="#deets" style={{ fontFamily: "OpenSansCondensed-light", fontSize: "18px" }}>Hola, Nini</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;