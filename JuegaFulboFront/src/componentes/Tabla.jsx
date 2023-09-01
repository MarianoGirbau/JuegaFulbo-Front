import PropTypes from "prop-types";
import ModalCRUD from "./ModalCRUD";

import { useState } from "react";

export default function Tabla({ ths, trs, eliminar, cancha }) {
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null); // Nuevo estado para el id seleccionado
  const [actualizarCancha, setActualizarCancha] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, cancha) => {
    setSelectedId(id);
    setShow(true);
    setActualizarCancha(cancha);
  };

  return (
    <>
      <table className="table mb-5" id="lista-de-canchas">
        <thead>
          <tr>
            {ths.map((th, index) => (
              <th scope="col" key={index}>
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {trs.map((trs, trsIndex) => (
            <tr key={trsIndex}>
              {trs.map((td, tdIndex) => (
                <td key={tdIndex}>{td}</td>
              ))}
              <td>
                <button
                  className="btn btn-outline-secondary editar"
                  onClick={() => handleShow(trs[0], cancha)}
                ></button>
                <button
                  className="btn btn-outline-secondary eliminar"
                  onClick={() => eliminar(trs[0])}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalCRUD
        id={selectedId}
        show={show}
        handleClose={handleClose}
        actualizar={true}
        cancha={actualizarCancha}
      />
    </>
  );
}
Tabla.propTypes = {
  ths: PropTypes.arrayOf(PropTypes.string).isRequired,
  trs: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
  eliminar: PropTypes.func.isRequired,
  cancha: PropTypes.bool,
};

Tabla.defaultProps = {
  cancha: false,
};
