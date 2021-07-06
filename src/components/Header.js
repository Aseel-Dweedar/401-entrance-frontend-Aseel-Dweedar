import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ color: "white" }}>
            MY DRINK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "white" }}>
                Main
              </Nav.Link>
              <Nav.Link href="/fav" style={{ color: "white" }}>
                Favorites
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
