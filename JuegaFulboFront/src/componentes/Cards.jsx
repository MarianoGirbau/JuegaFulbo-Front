
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css"

function Cards() {
  return (
    <>
      <Card  style={{ width: "25rem" }}>
        <Card.Img variant="top" src="/img/futbol5.jpg" />
        <Card.Body className="d-flex flex-column text-center justify-content-center">
        <div className="d-flex flex-row justify-content-between">
            <Card.Text>
                <img className="svg me-2" src="/img/futbol-regular.svg" alt="" />
                F5
            </Card.Text>
            <Card.Title>"Cancha X"</Card.Title>
            <Card.Text>
                <img className="svg" src="/img/dollar-sign-solid.svg" alt="" />
                4000
            </Card.Text>
        </div>
          <Button variant="dark">Reservar</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards