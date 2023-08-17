import "./admin.css";

const Admincomp = () => {
  return (
    <div className="container-fluid custom-container">
      <div className="container d-flex justify-content-center">
        <button type="button" className="btn btnAgregar btn-sm w-100 py-4 my-5">
          Agregar{" "}
        </button>
      </div>

      <div className="subtitulo">
        <h3>TABLA DE CANCHAS</h3>
        <hr className="mb-2" />
      </div>

      <table className="table mb-5" id="lista-de-canchas">
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
            <td>145563</td>
            <td>Cancha 1</td>
            <td>$4500</td>
            <td>Cancha futbol 5</td>
            <td>https://donpotrero.com/img/posts/2/medidas_lg.jpg</td>
            <td></td>
            <td>
              <button className="btn btn-outline-secondary editar"></button>
              <button className="btn btn-outline-secondary eliminar"></button>
            </td>
          </tr>

          <tr>
            <td>183789</td>
            <td>Cancha futbol 7</td>
            <td>$4500</td>
            <td>Cancha con red rota</td>
            <td>https://donpotrero.com/img/posts/2/medidas_lg.jpg</td>
            <td></td>
            <td>
              <button className="btn btn-outline-secondary editar"></button>
              <button className="btn btn-outline-secondary eliminar"></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="subtitulo">
        <h3>TABLA DE QUINCHOS</h3>
        <hr className="mb-2" />
      </div>

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
              <button className="btn btn-outline-secondary editar"></button>
              <button className="btn btn-outline-secondary eliminar"></button>
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
              <button className="btn btn-outline-secondary editar"></button>
              <button className="btn btn-outline-secondary eliminar"></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="subtitulo">
        <h3>TABLA DE USUARIOS</h3>
        <hr className="mb-2" />
      </div>

      <table className="table" id="lista-de-usuarios">
        <thead>
          <tr>
            <th scope="col">Nombre de Usuario</th>
            <th scope="col">Email</th>
            <th scope="col">Contraseña</th>
            <th scope="col"></th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody id="tablaUsuarios">
          <tr id="">
            <th scope="row">Admin</th>
            <td>Usuario</td>
            <td>123456</td>
            <td></td>
            <td>
              <button className="btn btn-outline-secondary eliminar"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admincomp;
