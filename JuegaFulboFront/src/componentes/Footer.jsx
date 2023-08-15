import './Footer.css';

export default function Footer() {
  return (
    <div>
        <hr className="horizontal-line" />
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
        <hr className="horizontal-line" />
        <p className="footer-text">Copyright 2023 © - JuegaFulbo</p>
    </div>
    
  ) 
}
