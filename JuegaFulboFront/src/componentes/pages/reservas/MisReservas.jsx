import { useContext, useEffect } from "react";
import { CanchasContext } from "../../../context/CanchasContext";

export default function MisReservas() {
  const { obtenerReserva, MisReservas } = useContext(CanchasContext);
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario) {
    var idUsuario = usuario.id; //Obtener id de usuario del localStorage
    console.log(idUsuario, "usuario");
  }
  useEffect(() => {
    obtenerReserva(idUsuario);
  }, []);
  const reservasGuardadas = JSON.parse(localStorage.getItem("reservasUsuario"));
  return (
    <>
      <h1>Mis reservas</h1>
      <ul>
        {reservasGuardadas &&
          reservasGuardadas.length > 0 &&
          reservasGuardadas.map((reserva, index) => (
            <li key={index}>
              Cancha {reserva.canchaNumero}, Día {reserva.dia}, Horario{" "}
              {reserva.horario}
            </li>
          ))}
      </ul>
    </>
  );
}
