import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../logo.jpg";
import Button from "react-bootstrap/esm/Button";
function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar
      sticky="top"
      variant="dark"
      bg="dark"
      style={{ fontFamily: "Inter" }}
    >
      <Container fluid>
        {/* <Button
          variant="light"
          onClick={() => {
            navigate.goBack();
          }}
        >
          Back
        </Button> */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Full Stack Developer"
          />
        </Navbar.Brand>
        <Navbar.Text className="me-auto">Andrew Bowey</Navbar.Text>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/resume">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/certsandrecs/">
            Certificates and Recognition
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
