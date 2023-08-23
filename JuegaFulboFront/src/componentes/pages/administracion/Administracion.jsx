import Tabla from "../../Tabla";
import "./Administracion.css";
import { CanchasContext } from "../../../context/CanchasContext";
import { UsuariosContext } from "../../../context/UsuariosContext";

import { useContext, useState } from "react";
import ModalCRUD from "../../ModalCRUD";

const Admincomp = () => {
  const { canchas, eliminarCancha } = useContext(CanchasContext);
  const { usuarios, eliminarUsuario } = useContext(UsuariosContext);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="container-fluid custom-container">
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          className="btn btnAgregar btn-sm w-100 py-3 my-5 mx-2"
        >
          Agregar Cancha
        </button>
        <button
          type="button"
          className="btn btnAgregar btn-sm w-100 py-3 my-5 mx-2"
          onClick={handleShow}
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
          cancha.precio, // Is this correct? Shouldn't it be cancha.URL?
        ])}
        eliminar={eliminarCancha}
      ></Tabla>
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
      <ModalCRUD show={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default Admincomp;
