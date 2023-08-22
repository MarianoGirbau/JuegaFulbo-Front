import "./Sinreserva.css";

function SinReserva() {
  return (
    <>
      <div className="container-fluid cont-sinreserva d-flex justify-content-center p-4">
        <div className="row borde-mensaje py-4">
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center img-size mb-4 mb-sm-4 mb-md-0">
          <img src="/img/sinreserva.png" alt="" />
          </div>
          <div className="col-12 col-md-8 d-flex flex-column align-items-centerjustify-content-center text-center">  
            <h3>NO TIENES RESERVAS ACTIVAS</h3>
            <p>
              <span>¡Prepárate para jugar!</span> Aunque aún no tengas reservas activas,
              estamos aquí para ayudarte a asegurar tu próximo emocionante
              partido. Explora nuestras canchas disponibles y reserva tu espacio
              ahora mismo.
            </p> 
          </div>
        </div>
      </div>
    </>
  );
}

export default SinReserva;
