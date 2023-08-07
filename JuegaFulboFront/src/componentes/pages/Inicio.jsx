import "./inicio.css";

function PaginaInicial() {
  return (
    <>
      <div className="container-fluid d-flex centrado flex-column justify-content-center align-items-center webLengEfecto">
        <h3 className="h2Title text-center">¿QUE BUSCAS?</h3>
        <div className="d-flex gap-5 flex-wrap justify-content-center">
        <div className="cuadroCanchas d-flex justify-content-center align-items-center" >
          <h3 className="h3Title"><a href="LARUTAACA">CANCHAS</a></h3>
        </div>
        <div className="cuadroQuinchos d-flex justify-content-center align-items-center">
          <h3 className="h3Title"><a href="LARUTAACA">QUINCHOS</a></h3>
        </div>
        </div>
      </div>
    </>
  );
}

export default PaginaInicial;