import React from "react";
import BSNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import styles from "./styles.module.css";
import "./styles.css";

const Navbar = () => (
    <BSNavbar className={styles.navbar} expand="md">
        <Container className={styles.container}>
            <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BSNavbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#aboutme">About</Nav.Link>
                    <Nav.Link href="#contact" className={styles.lastNavLink}>Contact</Nav.Link>
                </Nav>
            </BSNavbar.Collapse>
        </Container>
    </BSNavbar>
);

export default Navbar;