import Card from "./Card";
import "./Cards.css";
import { useContext, useState } from "react";
import { CanchasContext } from "../context/CanchasContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { addDays } from 'date-fns'


registerLocale('es', es);


function Cards() {
  const { canchas } = useContext(CanchasContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  var fechaActual = new Date();
  var fechaSemana = addDays(fechaActual,7);
  console.log(fechaSemana)
  


  return (
    <>
      <div className="bg-canchas d-flex">
        <main className="container-fluid container-cards">
          <div className="container-fluid">
            <div className="row mb-3 pt-4 buscador">
              <div className="col-sm-12 col-md-4 col-lg-3 pb-3">
                <label htmlFor="opciones1"></label>
                <select id="opciones1" className="w-100 custom-select" value={selectedOption1} onChange={handleOptionChange1}>
                  <option disabled value="">
                    Tipo de Futbol
                  </option>
                  <option>Futbol 5</option>
                  <option>Futbol 7</option>
                  <option>Futbol 11</option>
                </select>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-3 pb-3">
                <label htmlFor="opciones3"></label>
                <select id="opciones3" className="w-100 custom-select" value={selectedOption2} onChange={handleOptionChange2}>
                  <option value="">
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
                  minDate={fechaActual}
                  maxDate={fechaSemana}
                  locale="es"
                  placeholderText="Ingrese la fecha"
                />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-3 pb-3">
                <button className="w-100 boton-busqueda">Buscar</button>
              </div>
            </div>
          </div>


          <div className=" row botones-custom">
            {canchas.length > 0 ? (
              canchas.map((cancha) => (
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
              <p>no hay canchas</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Cards;
