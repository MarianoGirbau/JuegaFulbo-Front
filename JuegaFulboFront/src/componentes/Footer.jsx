import "./Footer.css";

export default function Footer() {
  return (
    <div>
      {/*  <hr className="horizontal-line" />
        <footer className="footer">
        <div className="d-flex flex-column">
            <a href="/">Inicio</a>
            <a href="/">Contacto</a>
            <a href="/">Reserva</a>
            <a href="/">Quienes Somos</a>
            </div>
        <div className="">
            <img src="/img/juegaFulboLogo.svg" alt="Logo" style={{ width: '200px' }} />
        </div>
        <div className="d-flex flex-column justify-content-end text-end">
            <a className="py-2" href="/">@juegafulbo <img src="/img/TwitterJF.svg" alt="Logo" style={{ width: '30px' }} /></a>
            <a className="py-2" href="/">/juegafulbo <img src="/img/FacebookJF.svg" alt="Logo" style={{ width: '30px' }} /></a>
            <a className="py-2" href="/">juega.fulbo <img src="/img/InstagramJF.svg" alt="Logo" style={{ width: '30px' }} /></a>
        </div>
        </footer>
        <hr className="horizontal-line" /> */}
      <footer>
        <div className="container-fluid container-footer py-4 borde-custom">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="menu-izq d-flex flex-column text-center text-md-start text-lg-start">
                <a href="/">Inicio</a>
                <a href="/">Contacto</a>
                <a href="/">Reserva</a>
                <a href="/">Quienes Somos</a>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center py-4">
              <img src="/img/juegaFulboLogo.svg" alt="" width={"250px"} />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <div className="menu-der d-flex flex-column text-center text-lg-end">
                <div className="twitter d-flex justify-content-end gap-3">
                  <a href="/">@juegafulbo</a>
                  <img src="/img/TwitterJF.svg" alt="" width={"35px"} />
                </div>
                <div className="facebook d-flex justify-content-end gap-3">
                  <a href="/">/juegafulbo</a>
                  <img src="/img/FacebookJF.svg" alt="" width={"35px"} />
                </div>
                <div className="instagram d-flex justify-content-end gap-3">
                  <a href="/">juega.fulbo</a>
                  <img src="/img/InstagramJF.svg" alt="" width={"35px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="footer-text">Copyright 2023 © - JuegaFulbo</p>
    </div>
  );
}
