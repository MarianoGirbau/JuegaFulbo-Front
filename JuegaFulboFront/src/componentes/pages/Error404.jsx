import "./error404.css";

function Error404() {
  return (
    <>
      <main className="container-fluid bgFut d-flex">
        <section className="container contPrincipal d-flex justify-content-center align-items-center">
          <section className="col d-flex d-none d-lg-block">
            <div className="relativo imgDorso">
            <img src="/img/DorsoSom.png" alt="" className="absolutoDorso subeBajaDorso" />
            </div>
            <div className="relativo imgFrente">
            <img src="/img/FrenteSom.png" alt="" className="absolutoFrente subeBajaFrente" />
            </div>
          </section>
          <section className="col d-flex flex-column justify-content-center text-center">
            <h1 className="d-none d-lg-block h1Large">ERROR 404</h1>
            <h1 className="d-sm-block d-lg-none h1Small">ERROR 404</h1>
            <p className="p-4">
              Lo sentimos, la página que estás buscando no se encuentra
              disponible. Ponete la camiseta y volve a la cancha!
            </p>
            <button className="p-4">VOLVER AL INICIO</button>
          </section>
        </section>
      </main>
    </>
  );
}

export default Error404;
