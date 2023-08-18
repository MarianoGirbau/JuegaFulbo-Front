import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css"
import Navegador from "./componentes/Nav";
import Rutas from "./componentes/Rutas/Rutas";
import Footer from "./componentes/Footer";
import UsuariosCont from "./context/UsuariosCont";
import axios from "axios"
 axios.defaults.baseURL = "http://localhost:27017/api";
axios.defaults.withCredentials = true;

function App() {

  return (
    
    
    <div className="contenedorPrincipal">
      <UsuariosCont>
      <Navegador/>
      <Rutas/>
      <Footer />
      </UsuariosCont>
    </div>
    
    
  )
}

export default App
