import "./inicio.css";

function PaginaInicial() {
  return (
    <>
      <div className="container-fluid d-flex centrado flex-column justify-content-center align-items-center webLengEfecto pb-5">
        <h3 className="h2Title text-center">¿QUE BUSCAS?</h3>
        <div className="d-flex gap-5 flex-wrap justify-content-center">
          <a
            href="/reservas"
            className="cuadroCanchas d-flex justify-content-center align-items-center"
          >
            <h3 className="h3Title">CANCHAS</h3>
          </a>
          <a
            href="/quincho"
            className="cuadroQuinchos d-flex justify-content-center align-items-center"
          >
            <h3 className="h3Title">QUINCHOS</h3>
          </a>
        </div>
      </div>
    </>
  );
}

export default PaginaInicial;
