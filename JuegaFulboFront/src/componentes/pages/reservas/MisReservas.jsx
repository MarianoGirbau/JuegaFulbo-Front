import React, { useContext, useEffect, useState } from "react";
import { CanchasContext } from "../../../context/CanchasContext";
import "../reservas/MisReservas.css";
import SinReserva from "../../Sinreserva";

export default function MisReservas() {
  const { obtenerReserva, MisReservas } = useContext(CanchasContext);
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [reservasGuardadas, setReservasGuardadas] = useState([]);
  const idUsuario = usuario.id;

  useEffect(() => {
    async function fetchReservas() {
      if (usuario) {
        console.log(idUsuario, "usuario");

        try {
          const reservas = await obtenerReserva(idUsuario);
          setReservasGuardadas(reservas);
        } catch (error) {
          console.error("Error al obtener las reservas:", error);
        }
      }
    }

    fetchReservas();
  }, [obtenerReserva]);

  return (
    <>
      <div className="container-fluid custom-cont-reservas my-4">
        <h1 className="text-center pt-3 sub-h1">Mis reservas</h1>
        <hr />
        <section className="d-flex flex-wrap justify-content-center gap-3">
          {reservasGuardadas && reservasGuardadas.length > 0 ? (
            reservasGuardadas.map((reserva, index) => (
              <div key={index}>
                <div className="boxes-reservas">
                  <h2 className="sub-h2 text-center">Precio: ${reserva.precio}</h2>
                  <hr />
                  <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column justify-content align-items-center">
                    <img src="/img/IconoCalendario.svg" width={"32px"} alt="" />
                    <p className="m-0">Día {reserva.dia}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <img src="/img/CanchaNumero.svg" width={"50px"} alt="" />
                    <p className="m-0">Cancha {reserva.numero}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                  <img src="/img/IconoReloj.svg" width={"50px"} alt="" />
                    <p className="m-0 ">Horario {reserva.horario}</p>
                  </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <SinReserva/>
          )}
        </section>
      </div>
    </>
  );
}
