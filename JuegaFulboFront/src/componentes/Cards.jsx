import Card from "./Card";
import "./cards.css";
import { useContext } from "react";
import { CanchasContext } from "../context/CanchasContext";

function Cards() {
  const { canchas } = useContext(CanchasContext);
  return (
    <>
      <div className="bg-canchas">
        <main className="container-fluid container-custom">
          <div className="container-fluid seleccion-canchas">
            <div className="row pt-4 mb-3">
              <div className="col-12 col-md-4 d-flex justify-content-center py-2">
                <button className="w-100 py-2">Futbol 5</button>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center py-2">
                <button className="w-100 py-2">Futbol 7</button>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center py-2">
                <button className="w-100 py-2">Futbol 11</button>
              </div>
            </div>
          </div>
          <div className="linea-divisora"></div>
          <div className=" row botones-custom">
            {canchas.length > 0 ? (
              canchas.map((cancha) => (
                <Card
                  key={cancha._id}
                  capacidad={cancha.capacidad}
                  numero={cancha.numero}
                  precio={cancha.precio}
                />
              ))
            ) : (
              <p>no hay canchas</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Cards;
