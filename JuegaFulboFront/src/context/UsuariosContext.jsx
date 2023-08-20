import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";
export const UsuariosContext = createContext();

// eslint-disable-next-line react/prop-types
const UsuariosProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState();

  const login = async (email, password) => {
    console.log(email, password, "login Context");
    try {
      console.log("LOGIN");
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email,
          password,
        }
      );

      console.log("RESPONSE: ", response);
      const jwtToken = response.data.data.token;
      const jwtDecode = jwt_decode(jwtToken);

      console.log(jwtDecode);
      const user = {
        id: jwtDecode.id,
        nombre: jwtDecode.nombre,
        apellido: jwtDecode.apellido,
        email: jwtDecode.email,
        rol: jwtDecode.rol,
      };

      localStorage.setItem("usuario", JSON.stringify(user));
      setUsuarioLogueado(user);
      console.log("usuario: ", usuarioLogueado);

      if (user.rol === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
      return user;
    } catch (error) {
      // console.error(error);
    }
  };

  const logout = async () => {
    const result = await Swal.fire({
      icon: "question",
      title: `¿Estás seguro de cerrar sesión ${usuarioLogueado.nombre}?`,
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Sí",
    });

    if (result.isConfirmed) {
      setUsuarioLogueado(null);
      localStorage.removeItem("usuario");
    }

    console.log(usuarioLogueado);
  };

  const getUsuarios = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/user/usuarios"
      );
      console.log(data);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("local", localStorage.getItem("usuario"));
    setUsuarioLogueado(JSON.parse(localStorage.getItem("usuario")));
    getUsuarios();
    console.log("usuarioLogueado (updated): ", usuarioLogueado);
    // console.log("roll", usuarioLogueado.rol);
  }, []);
  return (
    <UsuariosContext.Provider
      value={{ usuarioLogueado, setUsuarioLogueado, login, logout, usuarios }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosProvider;

// const [users, setUsers] = useState();
// const [userLogueado, setUserLogueado] = useState();

// const login = async (email, password) => {
//   console.log(email, password, "login Context");
//   const response = await axios.post("http://localhost:8081/api/user/login", {
//     email,
//     password,
//   });

//   const jwtToken = response.data.data.token;
//   const jwtDecode = jwt_decode(jwtToken);

//   const user = {
//     id: jwtDecode.id,
//     nombre: jwtDecode.nombre,
//     apellido: jwtDecode.apellido,
//     email: jwtDecode.email,
//     rol: jwtDecode.rol,
//   };

//   localStorage.setItem("user", JSON.stringify(user));
//   setUserLogueado(user);
//   console.log(user);

//   if (user.rol === "admin") {
//     window.location.href = "/admin";
//   } else {
//     window.location.href = "/";
//   }
// };

// const logout = () => {
//   localStorage.removeItem("user");
//   window.location.href = "/login";
// };

// useEffect(() => {
//   getUsers();
// }, []);
