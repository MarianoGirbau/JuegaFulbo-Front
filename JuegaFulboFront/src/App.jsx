import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navegador from "./componentes/Nav";
import Rutas from "./componentes/Rutas/Rutas";
import Footer from "./componentes/Footer";
import UsuariosProvider from "./context/UsuariosProvider";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="contenedorPrincipal">
      <UsuariosProvider>
        <Navegador />
        <Rutas />
        <Footer />
      </UsuariosProvider>
    </div>
  );
}

export default App;
