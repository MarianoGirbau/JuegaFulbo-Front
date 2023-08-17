import { Routes, Route } from "react-router-dom";
import Contacto from "../pages/Contacto/Contacto.jsx"
import Inicio from "../pages/home/Inicio.jsx";
import RegistroForm from "../pages/registro/RegistroForm.jsx";
import Admincomp from "../pages/admin/Admin.jsx";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/registro" element={<RegistroForm/>} />
            <Route path="/admin" element={<Admincomp/>} />
        </Routes>
    );
};

export default Rutas;