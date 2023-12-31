import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useState } from "react";
import ModalLogin from "./ModalLogin";
import { UsuariosContext } from "../context/UsuariosContext";
import "./Nav.css";

function Navegador() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { usuarioLogueado, logout } = useContext(UsuariosContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="navbar">
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
            <p className="p-0 mb-0 ms-2">
              Descubre la <span className="letraColor">Emoción</span> de jugar{" "}
            </p>
            <p className="p-0 mb-0 ms-2">
              en nuestras <span className="letraColor">canchas.</span>
            </p>
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
                {usuarioLogueado && usuarioLogueado.rol == "admin" ? (
                  <Nav.Link className="mx-4" href="/administracion">
                    Administrar
                  </Nav.Link>
                ) : (
                  usuarioLogueado != null ? (
                  <>
                    <Nav.Link className="mx-4" href="/mis-reservas">
                      Mis reservas
                    </Nav.Link>
                  </>
                  ):(
                    <></>
                  )
                )}
                <Nav.Link className="mx-4" href="/contacto">
                  Contacto
                </Nav.Link>
                {usuarioLogueado && usuarioLogueado.nombre && (
                  <div className="d-flex align-items-center mx-4 gap-3"><img src="/img/user-solid.svg" width={"20px"} alt="" /> <span className="usuario-logueado">{usuarioLogueado.nombre}</span></div>
                )}
              </Nav>
              <hr />
              <div className="d-flex justify-content-center">
                {!usuarioLogueado ? (
                  <>
                    <Button
                      className="botonesNav me-4"
                      variant="dark"
                      onClick={handleShow}
                    >
                      Ingresar
                    </Button>
                    <Button
                      className="botonesNav "
                      variant="dark"
                      href="/registro"
                    >
                      Registrarse
                    </Button>
                  </>
                ) : (
                  <Button
                    className="botonesNav "
                    variant="dark"
                    onClick={logout}
                  >
                    Cerrar Sesión
                  </Button>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <ModalLogin show={show} handleClose={handleClose} />
    </>
  );
}

export default Navegador;
