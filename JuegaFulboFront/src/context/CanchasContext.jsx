import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const CanchasContext = createContext();

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


  const obtenerCanchas = async () => {
    const { data } = await axios.get("http://localhost:4000/api/canchas");
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
        await axios.delete(`http://localhost:4000/api/canchas/${id}`);

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
          `http://localhost:4000/api/canchas/reserva/${idCancha}`,
          { idUsuario, dia, horario }
        );
        console.log({ idUsuario, dia, horario });

        Swal.fire({
          icon: "success",
          title: "¡Reserva exitosa!",
          text: "Se realizó la reserva exitosamente.",
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
    await axios.post(`http://localhost:4000/api/canchas`, dataCancha);

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
        `http://localhost:4000/api/canchas/${updatedCancha._id}`,
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
        MisReservas,
      }}
    >
      {children}
    </CanchasContext.Provider>
  );
};

export default CanchasProvider;

//   const addProducto = async (producto) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8001/api/canchas",
//         producto
//       );
//       setProductos([...productos, response.data]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteProducto = async (id) => {
//     console.log(id, "deleteProducto");
//     try {
//       await axios.delete(`http://localhost:8001/api/canchas/${id}`);
//       const newProductos = productos.filter((producto) => producto._id !== id);
//       setProductos(newProductos);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateProducto = async (updatedProduct) => {
//     console.log(updatedProduct, "updateProducto");
//     try {
//       await axios.put(
//         `http://localhost:8001/api/canchas/${updatedProduct._id}`,
//         updatedProduct
//       );
//       const newProductos = productos.map((producto) =>
//         producto._id === updatedProduct._id ? updatedProduct : producto
//       );
//       setProductos(newProductos);
//     } catch (error) {
//       console.log(error);
//     }
//   };
