import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navegador from "./componentes/Nav";
import Rutas from "./componentes/Rutas/Rutas";
import Footer from "./componentes/pages/Footer";

function App() {

  return (
    <>
      <Navegador/>
      <Rutas/>
      <Footer />
    </>
  )
}

export default App
