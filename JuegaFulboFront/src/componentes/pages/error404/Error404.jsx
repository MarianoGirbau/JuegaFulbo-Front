import "./error404.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Error404() {
  return (
    <>
    <div className="bg-error404 d-flex justify-content-center align-items-center">
      <main className="container-fluid custom-container-error main-error d-flex">
        <Container className="contPrincipal d-flex justify-content-center align-items-center">
          <Row className="col d-flex d-none d-lg-block">
            <div className="relativo imgDorso">
              <img src="/img/DorsoSom.png" alt="" className="absolutoDorso subeBajaDorso" />
            </div>
            <div className="relativo imgFrente">
              <img src="/img/FrenteSom.png" alt="" className="absolutoFrente subeBajaFrente" />
            </div>
          </Row>
          <Col className="col d-flex flex-column justify-content-center text-center tituloh1">
            <h1 className="h1Large">ERROR 404</h1>
            <p className="p-4">
              Lo sentimos, la página que estás buscando no se encuentra
              disponible. Ponete la camiseta y volve a la cancha!
            </p>
            <Button className="boton-404 p-3" href="/">VOLVER AL INICIO</Button>
          </Col>
        </Container>
      </main>
      </div>
    </>
  );
}

export default Error404;