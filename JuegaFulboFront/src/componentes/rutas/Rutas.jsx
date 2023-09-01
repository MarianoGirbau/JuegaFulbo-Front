import { Routes, Route } from "react-router-dom";
import Contacto from "../pages/contacto/Contacto";
import Inicio from "../pages/home/Inicio.jsx";
import RegistroForm from "../pages/registro/RegistroForm.jsx";
import Cards from "../Cards.jsx";
import Admincomp from "../pages/administracion/Administracion.jsx";
import Error404 from "../pages/error404/Error404.jsx";
import MisReservas from "../pages/reservas/MisReservas.jsx";
import SobreNosotros from "../pages/sobrenosotros/SobreNosotros";

const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

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
          <Route path="/administracion" element={<Error404 />} />
        </>
      )}
      {usuarioLogueado != null ? (
        <>
          <Route path="/mis-reservas" element={<MisReservas />} />
        </>
      ):(
        <Route path="/mis-reservas" element={<Error404/>} />
      )}
      <>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reservas" element={<Cards />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/about" element={<SobreNosotros />} />
      </>
    </Routes>
  );
};

export default Rutas;
