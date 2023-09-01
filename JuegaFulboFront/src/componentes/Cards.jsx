import Card from "./Card";
import "./Cards.css";
import { useContext, useState } from "react";
import { CanchasContext } from "../context/CanchasContext";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';


registerLocale('es', es);


function Cards() {
  const { canchas } = useContext(CanchasContext);
  const [selectedOption1, setSelectedOption1] = useState("");

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };


  
  const filteredCanchas = canchas.filter((cancha) => {
    if (selectedOption1 === "") {
      return true; // Mostrar todas las canchas si no se selecciona ninguna opción
    } else {
      const selectedCapacidad = parseInt(selectedOption1.split(" ")[1]);
      return cancha.capacidad === selectedCapacidad;
    }
  });
  


  return (
    <>
      <div className="bg-canchas d-flex">
        <main className="container-fluid container-cards">
          <div className="container-fluid">
            <div className="row mb-3 pt-4 buscador">
              <div className="col-sm-12 col-md-4 col-lg-3 pb-3">
                <label htmlFor="opciones1"></label>
                <select id="opciones1" className="w-100 custom-select" value={selectedOption1} onChange={handleOptionChange1}>
                  <option value="">
                    Tipo de Futbol
                  </option>
                  <option>Futbol 5</option>
                  <option>Futbol 7</option>
                  <option>Futbol 11</option>
                </select>
              </div>
            </div>
          </div>


          <div className=" row botones-custom">
            {filteredCanchas.length > 0 ? (
              filteredCanchas.map((cancha) => (
                <Card
                  key={cancha._id}
                  id={cancha._id}
                  capacidad={cancha.capacidad}
                  numero={cancha.numero}
                  precio={cancha.precio}
                  img={cancha.img}
                />
              ))
            ) : (
              <p>No hay canchas disponibles con la capacidad seleccionada.</p>
            )}
        </div>

        </main>
      </div>
    </>
  );
}

export default Cards;
