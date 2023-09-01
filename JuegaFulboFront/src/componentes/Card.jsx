import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import ModalReserva from "./pages/reservas/ModalReserva";


export default function Card({ capacidad, numero, precio, id, img }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <section className="cards">
          <div className="img-bg">
            <img
              src={img}
              className="img-fluid cover-image"
              alt=""
            />
          </div>
          <div className="d-flex justify-content-between px-3 py-2">
            <p className="m-0">Futbol {capacidad}</p>
            <p className="m-0">Cancha {numero}</p>
            <p className="m-0">${precio}</p>
          </div>
          <section className="boton-reserva d-flex justify-content-center mb-3">
            <Button className="b-custom w-100" onClick={handleShow} >Reservar</Button>
          </section>
        </section>
      </div>
      <ModalReserva show={show} handleClose={handleClose} idCancha={id} capacidad={capacidad} numero={numero} precio={precio}/>
    </>
  );
}

Card.propTypes = {
  capacidad: PropTypes.node.isRequired,
  numero: PropTypes.node.isRequired,
  precio: PropTypes.node.isRequired,
};
