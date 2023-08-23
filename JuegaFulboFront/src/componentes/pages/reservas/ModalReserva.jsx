import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { CanchasContext } from "../../../context/CanchasContext";
import { addDays, format } from 'date-fns';
import Swal from "sweetalert2";
import "./ModalReserva.css";

export function ModalReserva({ show, handleClose, idCancha, capacidad, numero, precio }) {
  const { reservarCancha } = useContext(CanchasContext);
  const idUsuario = null;
  const usuario = JSON.parse(localStorage.getItem("usuario")); 
  if (usuario) {
    idUsuario = usuario.id; //Obtener id de usuario del localStorage
    console.log(idUsuario, "usuario")
  } 
  
  var fechaHoy = new Date();
  var fecha0 = format(fechaHoy, 'dd/MM').toString();
  var fecha1 = format(addDays(fechaHoy,1), 'dd/MM').toString();
  var fecha2 = format(addDays(fechaHoy,2), 'dd/MM').toString();
  var fecha3 = format(addDays(fechaHoy,3), 'dd/MM').toString();
  var fecha4 = format(addDays(fechaHoy,4), 'dd/MM').toString();
  var fecha5 = format(addDays(fechaHoy,5), 'dd/MM').toString();
  var fecha6 = format(addDays(fechaHoy,6), 'dd/MM').toString();

  const [diaSemana, setDiaSemana] = useState('0'); // Valor inicial del día de la semana
  const [horario, setHorario] = useState('0'); // Valor inicial del horario


  const handleSubmit = (event) => {
    event.preventDefault();
    if (idUsuario != null) {
      reservarCancha(idUsuario,diaSemana,horario,idCancha)
      console.log('Día seleccionado:', diaSemana);
      console.log('Horario seleccionado:', horario);
      console.log('cancha seleccionada:', idCancha);      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Debe Registrarse!',
        html: 'Para hacer una reserva usted debe <a href="/registro">registrarse</a> primero!',
      });
    }
  };
  
  console.log(fecha1)
  
    return (
      <>
        <Modal show={show} onHide={handleClose} className="modalFondo">
          <Modal.Body>
            <Modal.Header closeButton></Modal.Header>
            <section className="cont-modal">
              <div className="d-flex justify-content-center">
                <h1>Reservas</h1>
              </div>
              <hr />
              <div className="row">
              {/* <p>{id={idCancha},}</p> */}
              <p className="col m-0 text-start">Capacidad={capacidad}</p>
              <p className="col m-0 text-center">Numero={numero}</p>
              <p className="col m-0 text-end">Precio={precio}</p>
              </div>
              <hr />
              
              <form id="formulario" onSubmit={handleSubmit} className="d-flex flex-column">
                <label htmlFor="diaSemana">Selecciona un día de la semana:</label>
                <select id="diaSemana" name="diaSemana" value={diaSemana} onChange={(e) => setDiaSemana(e.target.value)}>
                  <option value="0">{fecha0}</option>
                  <option value="1">{fecha1}</option>
                  <option value="2">{fecha2}</option>
                  <option value="3">{fecha3}</option>
                  <option value="4">{fecha4}</option>
                  <option value="5">{fecha5}</option>
                  <option value="6">{fecha6}</option>
                </select>

                <label htmlFor="horario">Selecciona un horario:</label>
                <select id="horario" name="horario" value={horario} onChange={(e) => setHorario(e.target.value)}>
                  <option value="0">19:00</option>
                  <option value="1">20:00</option>
                  <option value="2">21:00</option>
                  <option value="3">22:00</option>
                  <option value="4">23:00</option>
                </select>
                <input type="hidden" name="usuarioId" value={idCancha} />
                <input type="submit" value="Enviar" className="boton-enviar mt-3"/>
              </form>
              </section>

          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default ModalReserva;