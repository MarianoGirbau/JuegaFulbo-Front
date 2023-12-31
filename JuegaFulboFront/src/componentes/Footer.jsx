import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer-custom">
        <div className="container-fluid container-footer py-4 borde-custom">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="menu-izq d-flex flex-column text-center text-md-start text-lg-start">
                <a href="/">Inicio</a>
                <a href="/contacto">Contacto</a>
                <a href="/reservas">Reserva</a>
                <a href="/about">Quienes Somos</a>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center py-4">
              <img src="/img/LogoJF3602.gif" alt="" width={"130px"} />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <div className="menu-der d-flex flex-column text-center text-lg-end">
                <div className="twitter d-flex justify-content-end gap-3">
                  <a href="/error404">@juegafulbo</a>
                  <img src="/img/TwitterJF.svg" alt="" width={"35px"} />
                </div>
                <div className="facebook d-flex justify-content-end gap-3">
                  <a href="/error404">/juegafulbo</a>
                  <img src="/img/FacebookJF.svg" alt="" width={"35px"} />
                </div>
                <div className="instagram d-flex justify-content-end gap-3">
                  <a href="/error404">juega.fulbo</a>
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
