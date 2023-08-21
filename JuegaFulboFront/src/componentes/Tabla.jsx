import PropTypes from "prop-types";
import ModalActualizar from "./ModalActualizar";
// import { CanchasContext } from "../context/CanchasContext";
// import { UsuariosContext } from "../context/UsuariosContext";

import { useState } from "react";

export default function Tabla({ ths, trs, eliminar }) {
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null); // Nuevo estado para el id seleccionado

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setSelectedId(id);
    setShow(true);
  };
  // const handleUpdate = () => {};
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
                  onClick={() => handleShow(trs[0])}
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

      <ModalActualizar
        id={selectedId}
        show={show}
        handleClose={handleClose}
        actualizar={true}
      />
    </>
  );
}
Tabla.propTypes = {
  ths: PropTypes.arrayOf(PropTypes.string).isRequired,
  trs: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
};
