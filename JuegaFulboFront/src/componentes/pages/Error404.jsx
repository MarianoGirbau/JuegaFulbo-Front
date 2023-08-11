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
            <h1 className="d-none d-xl-block h1xl">ERROR 404</h1>
            <h1 className="d-xl-none d-lg-block h1Small">ERROR 404</h1>
            <p className="p-4">
            Estamos revisando el VAR para ver qué pasó con esta página. Mientras tanto, puedes volver al campo principal.
            </p>
            <button className="p-4">VOLVER AL INICIO</button>
          </section>
        </section>
      </main>
    </>
  );
}

export default Error404;
