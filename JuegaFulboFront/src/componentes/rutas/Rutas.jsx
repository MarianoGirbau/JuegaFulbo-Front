import { Routes, Route } from "react-router-dom";
import Contacto from "../pages/Contacto/Contacto.jsx"
import Home from "../pages/home/Home.jsx";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contacto" element={<Contacto/>} />
        </Routes>
    );
};

export default Rutas;