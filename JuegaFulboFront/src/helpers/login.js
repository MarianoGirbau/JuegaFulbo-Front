import jwt_decode from "jwt-decode";
import axios from "axios";
// import { UsuariosContext } from "../context/UsuariosProvider";
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// const { setUsuario } = useContext(UsuariosContext);

export const login = async (email, password) => {
  console.log(email, password, "login Context");
  try {
    console.log("LOGIN");
    const response = await axios.post("http://localhost:4000/api/user/login", {
      email,
      password,
    });

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

    // localStorage.setItem("usuario", JSON.stringify(user));
    // console.log("user: ", user);

    if (user.rol === "admin") {
      //   window.location.href = "/admin";
    } else {
      //   window.location.href = "/";
    }
    return user;
  } catch (error) {
    // console.error(error);
  }
};

// export const logout = () => {
//   localStorage.removeItem("user");
//   window.location.href = "/login";
// };

// const logueado = () => {
//   if (localStorage.getItem("usuario")) {
//     console.log("esta logueado");
//   } else {
//     console.log("no esta logueado");
//   }
// };
// useEffect(() => {
//   getUsuario();
// }, []);
