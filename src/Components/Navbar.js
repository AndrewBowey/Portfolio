import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

function NavBar() {
  return (
    <Navbar
      key="lg"
      sticky="top"
      variant="dark"
      bg="dark"
      style={{ fontFamily: "Inter" }}
      expand="lg"
      className="mb-3"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            style={{
              width: "6.25rem",
              height: "3.125rem",
            }}
            className="d-inline-block align-top"
            alt="Full Stack Developer"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbarLabel-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar.Text className="me-auto">Andrew Bowey</Navbar.Text>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
