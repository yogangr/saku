/* eslint-disable no-unused-vars */
import logo from "../images/logo-saku.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <>
      <Navbar expand="lg" className="navbar my-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>{" "}
          <div className="vertical-hr"></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-3">
              <Nav.Link href="#home" className="mx-2">
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className="mx-2">
                ABOUT
              </Nav.Link>
              <Nav.Link href="#link" className="mx-2">
                SUPPORT
              </Nav.Link>
              <Nav.Link href="#link" className="mx-2">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
