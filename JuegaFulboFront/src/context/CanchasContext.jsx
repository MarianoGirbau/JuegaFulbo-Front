import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const CanchasContext = createContext();

// eslint-disable-next-line react/prop-types
const CanchasProvider = ({ children }) => {
  const [canchas, setCanchas] = useState([]);

  const obtenerCanchas = async () => {
    const { data } = await axios.get("http://localhost:4000/api/canchas");
    setCanchas([...data]);
    // console.log("data", data);
    // console.log("canchas", canchas.length);
  };

  useEffect(() => {
    obtenerCanchas();
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

  const reservarCancha = async (idUsuario,dia,horario,idCancha) => {
    const canchaReserva = canchas.find((cancha) => cancha._id === idCancha);
    const numeroCancha = canchaReserva.numero;
    console.log(canchaReserva.reservas[dia][horario],"reserva")
    if (canchaReserva && canchaReserva.reservas[dia][horario] === null) {
      try {
        await axios.put(`http://localhost:4000/api/canchas/reserva/${idCancha}`, {idUsuario,dia,horario});
        console.log({idUsuario,dia,horario})
        //SWEET ALERT "SE REALIZÓ LA RESERVA"
        //LLEVAR A LA PAGINA DE MIS RESERVAS O MANDAR MAIL Y NO USAR PAGINA RESERVAS
      } catch (error) {
        console.log("ERROR", error);
      }
    }else{
      //SWEET ALERT DE HORARIO OCUPADO
    }
  }

  return (
    <CanchasContext.Provider
      value={{
        canchas,
        setCanchas,
        eliminarCancha,
        reservarCancha
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
