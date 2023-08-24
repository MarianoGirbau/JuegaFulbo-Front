import React, { useContext, useEffect, useState } from "react";
import { CanchasContext } from "../../../context/CanchasContext";

export default function MisReservas() {
  const { MisReservas } = useContext(CanchasContext);
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [reservasGuardadas, setReservasGuardadas] = useState([]);

  useEffect(() => {
    // Solo cargar desde el localStorage si no hay datos en reservasGuardadas
    if (usuario && reservasGuardadas.length === 0) {
      const idUsuario = usuario.id;
      console.log(idUsuario, "usuario");

      try {
        const reservas = JSON.parse(localStorage.getItem("reservasUsuario")) || [];
        setReservasGuardadas(reservas);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    }
  }, [usuario, reservasGuardadas]); // Aseguramos que se ejecute cuando usuario cambie o reservasGuardadas cambie

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
