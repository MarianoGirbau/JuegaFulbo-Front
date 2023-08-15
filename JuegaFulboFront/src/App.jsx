import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css"
import Navegador from "./componentes/Nav";
import Rutas from "./componentes/Rutas/Rutas";
import Footer from "./componentes/Footer";

function App() {

  return (
    <>
    <div className="contenedorPrincipal">
      <Navegador/>
      <Rutas/>
      <Footer />
    </div>
    </>
  )
}

export default App
