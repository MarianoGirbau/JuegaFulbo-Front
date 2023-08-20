import PropTypes from "prop-types";
import { CanchasContext } from "../context/CanchasContext";
import { useContext } from "react";

export default function Tabla({ ths, trs }) {
  const { eliminarCancha } = useContext(CanchasContext);
  useContext;
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
                <button className="btn btn-outline-secondary editar"></button>
                <button
                  className="btn btn-outline-secondary eliminar"
                  onClick={eliminarCancha({})}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
Tabla.propTypes = {
  ths: PropTypes.arrayOf(PropTypes.string).isRequired,
  trs: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
};
