import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Nav.css";

function Navegador() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="navbar mb-3"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Brand href="/">
            <img
              src="/img/juegaFulboLogo.svg"
              width="250"
              height="70"
              className="d-inline-block align-top"
              alt="Logo de Juega Fulbo"
            />
          </Navbar.Brand>
          <div className="textoNav d-none d-xl-block">
            <p className="p-0 mb-0 ms-2">Descubre la Emoción de jugar </p>
            <p className="p-0 mb-0 ms-2">en nuestras canchas</p>
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="start"
            data-bs-theme="dark"
            className="offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                <img
                  src="/img/juegaFulboLogo.svg"
                  width="100"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Logo de Juega Fulbo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title="Reservas"
                  id={`offcanvasNavbarDropdown-expand`}
                  className="mx-4"
                >
                  <NavDropdown.Item href="#action3">Canchas</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Quinchos</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-4" href="/contacto">
                  Contacto
                </Nav.Link>
              </Nav>
              <hr />
              <div className="d-flex justify-content-center">
                <Button className="botonesNav me-4" variant="dark">
                  Ingresar
                </Button>
                <Button className="botonesNav " variant="dark">
                  Registrarse
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegador;
