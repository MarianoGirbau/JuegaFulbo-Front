import { useContext, useState } from "react";
import juegaFulboLogo from "/img/juegaFulboLogo.svg";
import { Modal } from "react-bootstrap";
import { UsuariosContext } from "../../../context/UsuariosContext";
import { CanchasContext } from "../../../context/CanchasContext";

export function ModalReserva({ show, handleClose, id, capacidad, numero, precio }) {
  //Obtener id de usuario del localStorage
  
    return (
      <>
        <Modal show={show} onHide={handleClose} className="modalFondo">
          <Modal.Body>
            <Modal.Header closeButton></Modal.Header>
            <section className="container-login">
              <div className="imagen-container">
                <img src={juegaFulboLogo} alt="Mi Imagen SVG" />
              </div>
              <hr className="lineahorizontal" />
              <p>id={id} , capacidad={capacidad}, numero={numero}, precio={precio}</p>
            </section>

            {/* Hay que poner botones con los horarios, y obtener desde el back cuales horarios estan disponibles, si no anularlos.
            Luego, cuando seleccionamos un horario que se puede reservar, con un boton para confirmar llamar a la funcion reserva, 
            pasandole el id del usuario con url (http://localhost:4000/api//canchas/reserva/${id}) y, el número de cancha y el horario elegido por parámetros.
            Mostrar una alerta de confirmacion y llevarte a la página "mis reservas" */}
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default ModalReserva;