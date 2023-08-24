import React, { useContext, useEffect, useState } from "react";
import { CanchasContext } from "../../../context/CanchasContext";

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
      <h1>Mis reservas</h1>
      <ul>
        {reservasGuardadas && reservasGuardadas.length > 0 ? (
          reservasGuardadas.map((reserva, index) => (
            <li key={index}>
              Cancha {reserva.numero}, Día {reserva.dia}, Horario {reserva.horario}
            </li>
          ))
        ) : (
          <li>No tienes reservas guardadas.</li>
        )}
      </ul>
    </>
  );
}
