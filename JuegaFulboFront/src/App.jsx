import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navegador from "./componentes/Nav";
import Rutas from "./componentes/rutas/Rutas";
import Footer from "./componentes/Footer";
import UsuariosProvider from "./context/UsuariosContext";
import axios from "axios";
import CanchasProvider from "./context/CanchasContext";
// axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
/* import PaginaInicial from "./componentes/pages/inicio"; */
import "./componentes/Scrollbar.css" ;

import Contacto from './componentes/pages/Contacto';

function App() {
  return (
    <div className="contenedorPrincipal">
      <CanchasProvider>
        <UsuariosProvider>
          <Navegador />
          <Rutas />
          <Footer />
        </UsuariosProvider>
      </CanchasProvider>
    </div>
  );
}

export default App;
