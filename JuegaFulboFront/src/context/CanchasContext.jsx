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
    console.log("data", data);
    console.log("canchas", canchas.length);
  };

  useEffect(() => {
    obtenerCanchas();
  }, []);

  const eliminarCancha = async (id) => {
    console.log(id, "deleteProducto");
    const canchaAEliminar = canchas.find((cancha) => cancha.id === id);
    const result = await Swal.fire({
      icon: "question",
      title: `¿Estás seguro de eliminar ${canchaAEliminar.numero}?`,
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

  return (
    <CanchasContext.Provider
      value={{
        canchas,
        setCanchas,
        eliminarCancha,
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
