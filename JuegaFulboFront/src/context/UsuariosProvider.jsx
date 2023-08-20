import { createContext, useState } from "react";

export const UsuariosContext = createContext();

// eslint-disable-next-line react/prop-types
const UsuariosProvider = ({ children }) => {
  // const [usuario, setUsuario] = useState({});
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  // console.log("en el context", usuarioLogueado);
  return (
    <UsuariosContext.Provider value={{ usuarioLogueado, setUsuarioLogueado }}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosProvider;
