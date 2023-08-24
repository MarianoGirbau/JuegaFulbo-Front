import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { addDays, format } from "date-fns";

export const CanchasContext = createContext();

var fechaHoy = new Date();
  var fecha0 = format(fechaHoy, "dd/MM").toString();
  var fecha1 = format(addDays(fechaHoy, 1), "dd/MM").toString();
  var fecha2 = format(addDays(fechaHoy, 2), "dd/MM").toString();
  var fecha3 = format(addDays(fechaHoy, 3), "dd/MM").toString();
  var fecha4 = format(addDays(fechaHoy, 4), "dd/MM").toString();
  var fecha5 = format(addDays(fechaHoy, 5), "dd/MM").toString();
  var fecha6 = format(addDays(fechaHoy, 6), "dd/MM").toString();

// eslint-disable-next-line react/prop-types
const CanchasProvider = ({ children }) => {
  const [canchas, setCanchas] = useState([]);
  const [MisReservas, setMisReservas] = useState([]);

// Dentro de la función obtenerReserva
const obtenerReserva = async (idUsuario) => {
  const reservasEncontradas = [];
  let tieneReservas = false; // Inicializamos la bandera en falso

  canchas.forEach((cancha) => {
    cancha.reservas.forEach((reserva, indiceDia) => {
      reserva.forEach((idReserva, indiceHorario) => {
        if (idReserva === idUsuario) {
          switch (indiceDia) {
            case 0:
              indiceDia = fecha0;
              break;
            case 1:
              indiceDia = fecha1
              break;
            case 2:
              indiceDia = fecha2
              break;
            case 3:
              indiceDia = fecha3
              break;
            case 4:
              indiceDia = fecha4
              break;
            case 5:
              indiceDia = fecha5
              break;  
            case 6:
              indiceDia = fecha6
              break;  
          
            default:
              break;
          }
          switch (indiceHorario) {
            case 0:
              indiceHorario = "19:00";
              break;
            case 1:
              indiceHorario = "20:00";
              break;
            case 2:
              indiceHorario = "21:00";
              break;
            case 3:
              indiceHorario = "22:00";
              break;
            case 4:
              indiceHorario = "23:00";
              break;          
            default:
              break;
          }
          const infoReserva = {
            numero: cancha.numero,
            dia: indiceDia,
            horario: indiceHorario,
            precio: cancha.precio
          };
          reservasEncontradas.push(infoReserva);
          tieneReservas = true; // Actualizamos la bandera cuando se encuentra una reserva
        }
      });
    });
  });


  return reservasEncontradas;
};

const obtenerTodasLasReservas = () => {
  const todasLasReservas = [];

  canchas.forEach((cancha) => {
    cancha.reservas.forEach((reservasDia, indiceDia) => {
      const fechaReserva = [fecha0, fecha1, fecha2, fecha3, fecha4, fecha5, fecha6][indiceDia];

      reservasDia.forEach((idReserva, indiceHorario) => {
        if (idReserva) {
          const horarioReserva = ["19:00", "20:00", "21:00", "22:00", "23:00"][indiceHorario];

          const infoReserva = {
            numero: cancha.numero,
            dia: fechaReserva,
            horario: horarioReserva,
            precio: cancha.precio,
            idUsuario: idReserva,
            indiceDia, 
            indiceHorario,
          };

          console.log("infoReserva: ", infoReserva);
          todasLasReservas.push(infoReserva);
          console.log("todasLasReservas: ",todasLasReservas);
        }
      });
    });
  });

  return todasLasReservas;
};

const eliminarReserva = async (idUsuario, indiceDia, indiceHorario) => {
  try {
    const nuevasCanchas = [...canchas];

    const canchaIndex = nuevasCanchas.findIndex((cancha) =>
      cancha.reservas[indiceDia][indiceHorario] === idUsuario
    );

    if (canchaIndex !== -1) {
      nuevasCanchas[canchaIndex].reservas[indiceDia][indiceHorario] = null;

      setCanchas(nuevasCanchas);

      const response = await axios.delete(
        `https://juegafulbo-back.onrender.com/api/canchas/reserva/${nuevasCanchas[canchaIndex]._id}`,
        { data: { idUsuario, dia: indiceDia, horario: indiceHorario } }
      );

      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("Reserva no encontrada en la cancha.");
      return false;
    }
  } catch (error) {
    console.error("Error al eliminar reserva:", error);
    return false;
  }
};


  const obtenerCanchas = async () => {
    const { data } = await axios.get("https://juegafulbo-back.onrender.com/api/canchas");
    setCanchas([...data]);
    // console.log("data", data);
    // console.log("canchas", canchas.length);
  };

  useEffect(() => {
    obtenerCanchas();
    // obtenerReserva();
  }, []);

  const eliminarCancha = async (id) => {
    // console.log(id, "deleteProducto");
    // console.log(canchas, "canchas");
    const canchaAEliminar = canchas.find((cancha) => cancha._id === id);
    const result = await Swal.fire({
      icon: "question",
      title: `¿Estás seguro de eliminar la cancha número ${canchaAEliminar.numero}?`,
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Sí",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`https://juegafulbo-back.onrender.com/api/canchas/${id}`);

        const canchasFiltradas = canchas.filter((cancha) => cancha._id !== id);
        setCanchas(canchasFiltradas);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const reservarCancha = async (idUsuario, dia, horario, idCancha) => {
    const canchaReserva = canchas.find((cancha) => cancha._id === idCancha);
    // const numeroCancha = canchaReserva.numero;
    console.log(canchaReserva.reservas[dia][horario], "reserva");
    if (canchaReserva && canchaReserva.reservas[dia][horario] === null) {
      try {
        await axios.put(
          `https://juegafulbo-back.onrender.com/api/canchas/reserva/${idCancha}`,
          { idUsuario, dia, horario }
        );
        Swal.fire({
          icon: "success",
          title: "¡Reserva exitosa!",
          html: 'Para ver sus reservas haz click <a href="/mis-reservas">aqui</a>!',
        });
        
      } catch (error) {
        console.log("ERROR", error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Horario ocupado",
        text: "El horario seleccionado está ocupado. Por favor, elige otro horario.",
      });
    }
  };

  const addCancha = async (dataCancha) => {
    await axios.post(`https://juegafulbo-back.onrender.com/api/canchas`, dataCancha);

    await Swal.fire({
      icon: "success",
      title: "Cancha agregada",
      showConfirmButton: false,
      timer: 3000,
    });

    window.location.href = "/administracion";
  };
  const updateCancha = async (updatedCancha) => {
    console.log(updatedCancha);
    try {
      await axios.put(
        `https://juegafulbo-back.onrender.com/api/canchas/${updatedCancha._id}`,
        updatedCancha
      );
      await Swal.fire({
        icon: "success",
        title: "Cancha Actualizada",
        showConfirmButton: false,
        timer: 2000,
      });

      const newCanchas = canchas.map((cancha) =>
        cancha._id === updatedCancha._id ? updatedCancha : cancha
      );
      setCanchas(newCanchas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CanchasContext.Provider
      value={{
        canchas,
        setCanchas,
        eliminarCancha,
        reservarCancha,
        updateCancha,
        addCancha,
        obtenerReserva,
        obtenerTodasLasReservas,
        eliminarReserva,
        MisReservas,
      }}
    >
      {children}
    </CanchasContext.Provider>
  );
};

export default CanchasProvider;


