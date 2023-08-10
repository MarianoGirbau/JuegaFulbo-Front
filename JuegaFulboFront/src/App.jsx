import "bootstrap/dist/css/bootstrap.min.css";
import Navegador from "./componentes/Nav";
import Rutas from "./componentes/Rutas/Rutas";
import ModalLogin from "./componentes/ModalLogin";


function App() {

  return (
    <>
      <Navegador/>
      <Rutas/>
      <ModalLogin/>
      {/* Aqui va el footer */}
    </>
  )
}


export default App
