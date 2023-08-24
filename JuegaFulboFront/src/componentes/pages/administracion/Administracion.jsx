import Tabla from "../../Tabla";
import "./Administracion.css";
import { CanchasContext } from "../../../context/CanchasContext";
import { UsuariosContext } from "../../../context/UsuariosContext";
import { useContext, useEffect, useState } from "react";
import ModalCRUD from "../../ModalCRUD";

const Admincomp = () => {
  const { canchas, eliminarCancha, obtenerTodasLasReservas, eliminarReserva } = useContext(CanchasContext);
  const { usuarios, eliminarUsuario } = useContext(UsuariosContext);
  const [show, setShow] = useState(false);
  const [modalCancha, setModalCancha] = useState(false);
  const [todasLasReservas, setTodasLasReservas] = useState([]);

  const obtenerDatosUsuario = (idUsuario) => {
    const usuario = usuarios.find((usuario) => usuario._id === idUsuario);
    return usuario ? `${usuario.nombre} ${usuario.apellido}` : "Usuario Desconocido";
  };

  useEffect(() => {
    const reservas = obtenerTodasLasReservas();
    setTodasLasReservas(reservas);
  }, [obtenerTodasLasReservas]);

  const handleShow = (cancha) => {
    setShow(true);
    setModalCancha(cancha);
  };

  return (
    <div className="container-fluid custom-container-admin">
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btnAgregar btn-sm w-100 py-3 my-5 mx-2"
          onClick={() => handleShow(true)}
        >
          Agregar Cancha
        </button>
        <button
          type="button"
          className="btn btnAgregar btn-sm w-100 py-3 my-5 mx-2"
          onClick={() => handleShow(false)}
        >
          Agregar Usuario
        </button>
      </div>

      <div className="subtitulo">
        <h3>TABLA DE CANCHAS</h3>
        <hr className="mb-2" />
      </div>

      <div className="table-responsive">
        <Tabla
          cancha={true}
          ths={[
            "Código",
            "Núm de Cancha",
            "Capacidad",
            "Precio",
            "URL",

            "Acciones",
          ]}
          trs={canchas.map((cancha) => [
            cancha._id,
            cancha.numero,
            cancha.capacidad,
            cancha.precio,
            cancha.img, // Is this correct? Shouldn't it be cancha.URL?
          ])}
          eliminar={eliminarCancha}
        ></Tabla>
      </div>

      <div className="subtitulo">
        <h3>TABLA DE RESERVAS</h3>
        <hr className="mb-2" />
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Cancha</th>
              <th>Día</th>
              <th>Horario</th>
              <th>Precio</th>
              <th>Usuario</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {todasLasReservas.map((reserva, index) => (
              <tr key={index}>
                <td>{reserva.numero}</td>
                <td>{reserva.dia}</td>
                <td>{reserva.horario}</td>
                <td>{reserva.precio}</td>
                <td>{obtenerDatosUsuario(reserva.idUsuario)}</td>
                <td>
                  <button
                    className="btn btn-outline-secondary eliminar"
                    onClick={() => {
                      const confirmDelete = window.confirm("¿Estás seguro de eliminar esta reserva?");
                      if (confirmDelete) {
                        const exito = eliminarReserva(reserva.idUsuario, reserva.indiceDia, reserva.indiceHorario);
                        if (exito) {
                          console.log("Reserva borrada con éxito.");
                        }
                      }
                    }}
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="subtitulo">
        <h3>TABLA DE QUINCHOS</h3>
        <hr className="mb-2" />
      </div>

      <div className="table-responsive">
        <table className="table mb-5" id="lista-de-quinchos">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripción</th>
              <th scope="col">URL</th>
              <th scope="col"></th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>334366</td>
              <td>Quincho 1</td>
              <td>$5000</td>
              <td>Cancha futbol 5</td>
              <td>https://i.pinimg.com/originals/1f/08/87/1f0887.jpg</td>
              <td></td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary editar"></button>
                  <button className="btn btn-outline-secondary eliminar"></button>
                </div>
              </td>
            </tr>

            <tr>
              <td>183789</td>
              <td>Cancha futbol 7</td>
              <td>$4500</td>
              <td>Cancha con red rota</td>
              <td>https://i.pinimg.com/originals/1f/08/87/1f0887.jpg</td>
              <td></td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary editar"></button>
                  <button className="btn btn-outline-secondary eliminar"></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="subtitulo">
        <h3>TABLA DE USUARIOS</h3>
        <hr className="mb-2" />
      </div>

      <div className="table-responsive">
        <Tabla
          ths={["ID", "Nombre", "Apellido", "Email", "Rol", "Acciones"]}
          trs={usuarios.map((usuario) => [
            usuario._id,
            usuario.nombre,
            usuario.apellido,
            usuario.email,
            usuario.rol, // Is this correct? Shouldn't it be cancha.URL?
          ])}
          eliminar={eliminarUsuario}
        ></Tabla>
      </div>
      <ModalCRUD
        show={show}
        handleClose={() => setShow(false)}
        cancha={modalCancha}
      />
    </div>
  );
};

export default Admincomp;
