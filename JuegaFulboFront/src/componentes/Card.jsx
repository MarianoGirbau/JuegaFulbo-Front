import PropTypes from "prop-types";
// import "./cards.css";

export default function Card({ capacidad, numero, precio }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <section className="cards">
          <div className="img-bg">
            <img
              src="/img/Cancha5.jpg"
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
            <button className="b-custom w-100">Reservar</button>
          </section>
        </section>
      </div>
    </>
  );
}

Card.propTypes = {
  capacidad: PropTypes.node.isRequired,
  numero: PropTypes.node.isRequired,
  precio: PropTypes.node.isRequired,
};
