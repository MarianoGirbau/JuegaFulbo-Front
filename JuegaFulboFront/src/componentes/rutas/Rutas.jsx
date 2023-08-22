import { Routes, Route } from "react-router-dom";
import Contacto from "../pages/Contacto/Contacto.jsx";
import Inicio from "../pages/home/Inicio.jsx";
import RegistroForm from "../pages/registro/RegistroForm.jsx";
import Cards from "../Cards.jsx";
import Admincomp from "../pages/administracion/Administracion.jsx";

const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioLogueado);

const Rutas = () => {
  return (
    <Routes>
      {usuarioLogueado != null && usuarioLogueado.rol === "admin" ? (
        <>
          <Route path="/administracion" element={<Admincomp />} />
          
        </>
      ) : (
        <>
         <Route path="/registro" element={<RegistroForm />} />
        </>
        
      )}
      <>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/reservas" element={<Cards />} />
         
        </>

    </Routes>
  );
};

export default Rutas;
