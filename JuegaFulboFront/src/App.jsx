import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navigate } from "react-router-dom";
import SobreNosotros from "./SobreNosotros";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Routes>
        <Route path="/sobreNosotros" element={<SobreNosotros.jsx />}></Route>
      </Routes> */}
      <SobreNosotros></SobreNosotros>
    </>
  );
}

export default App;
