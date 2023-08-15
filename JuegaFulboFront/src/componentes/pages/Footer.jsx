import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div>
        <hr className="horizontal-line" />
        <footer className="footer">
        <div className="footer-column left-column">
            <a href="/">Inicio</a>
            <a href="/">Contacto</a>
            <a href="/">Reserva</a>
            <a href="/">Quienes Somos</a>
            </div>
        <div className="footer-column center-column">
            <img src="../../public/img/juegaFulboLogo.svg" alt="Logo" style={{ width: '200px' }} />
        </div>
        <div className="footer-column right-column">
            <a href="/">@juegafulbo <img src="../../public/img/juegaFulboLogo.svg" alt="Logo" style={{ width: '40px' }} /></a>
            <a href="/">/juegafulbo <img src="../../public/img/juegaFulboLogo.svg" alt="Logo" style={{ width: '40px' }} /></a>
            <a href="/">juega.fulbo <img src="../../public/img/juegaFulboLogo.svg" alt="Logo" style={{ width: '40px' }} /></a>
        </div>
        </footer>
        <hr className="horizontal-line" />
        <p className="footer-text">Copyright 2023 © - JuegaFulbo</p>
    </div>
    
  ) 
}
