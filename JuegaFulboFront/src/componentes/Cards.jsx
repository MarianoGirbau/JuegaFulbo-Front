import Card from "./Card";
import "./cards.css";
import { useContext, useState } from "react";
import { CanchasContext } from "../context/CanchasContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';


registerLocale('es', es);


function Cards() {

  const { canchas } = useContext(CanchasContext);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="bg-canchas">
        <main className="container-fluid container-custom">



          <div className="container-fluid">
            <div className="row mb-3 pt-4 buscador">
              <div className="col-sm-12 col-md-4 col-lg-3 pb-3">
                <label htmlFor="opciones1"></label>
                <select id="opciones1" className="w-100 custom-select">
                  <option disabled selected value="">
                    Tipo de Futbol
                  </option>
                  <option>Futbol 5</option>
                  <option>Futbol 7</option>
                  <option>Futbol 11</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3 pb-3">
                <label htmlFor="opciones3"></label>
                <select id="opciones3" className="w-100 custom-select">
                  <option disabled selected value="">
                    Seleccione horario
                  </option>
                  <option>10:00hs</option>
                  <option>12:00hs</option>
                  <option>14:00hs</option>
                  <option>14:00hs</option>
                  <option>16:00hs</option>
                  <option>18:00hs</option>
                  <option>20:00hs</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3 pb-3">
                <label htmlFor="opciones2"></label>
                <DatePicker
                  id="opciones2"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="custom-select"
                  dateFormat={"dd MMM yyyy"}
                  minDate={new Date()}
                  locale="es"
                  placeholderText="Ingrese la fecha"
                />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-3 pb-3">
                <button className="w-100 boton-reserva">Buscar</button>
              </div>
            </div>
          </div>

          {/* <div className="container-fluid seleccion-canchas">
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
          </div> */}




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
