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
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email,
          password,
        }
      );
      console.log(response, "response");
       
      const jwtToken = response.data.data.token;
      const jwtDecode = jwt_decode(jwtToken);

      console.log(jwtDecode, "token");

      const user = {
        id: jwtDecode.id,
        nombre: jwtDecode.nombre,
        apellido: jwtDecode.apellido,
        email: jwtDecode.email,
        rol: jwtDecode.rol,
      };
      
      localStorage.setItem("token", JSON.stringify(jwtToken));
      localStorage.setItem("usuario", JSON.stringify(user));
      Swal.fire({
        icon: 'success',
        title: `Bienvenido ${user.nombre}`,
        showConfirmButton: false,
        timer: 1500
      })
      setUsuarioLogueado(user);
      
      setTimeout(() => {
      if (user.rol === "admin") {
        window.location.href = "/administracion";
      } else {
        window.location.href = "/";
      }},1000)

      return user;

    } catch (error) {
      console.log(error,"login");
      Swal.fire({
        icon: "error",
        title: "Los datos ingresados no son correctos",
        text: "Reingrese los datos e intente nuevamente",
      });
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
      localStorage.removeItem("reservasUsuario");
      localStorage.removeItem("token");
      window.location.href = "/";
    }

  };

  const getUsuarios = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/user/usuarios"
      );
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  };
  const eliminarUsuario = async (id) => {
    const usuarioAEliminar = usuarios.find((usuario) => usuario._id === id);
    const result = await Swal.fire({
      icon: "question",
      title: `¿Estás seguro de eliminar el usuario ${usuarioAEliminar.nombre}?`,
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Sí",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/user/usuarios/${id}`);

        const canchasFiltradas = usuarios.filter((cancha) => cancha._id !== id);
        setUsuarios(canchasFiltradas);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addUsuarios = async (dataUser) => {
    try {
      await axios.post(`http://localhost:4000/api/user/registro`, dataUser);
      return true
    } catch (error) {
      console.log(error.response.status, "usu context");
      return false
    }
  };


  const updateUsuario = async (updatedUsuario) => {
    console.log(updatedUsuario, "updateUsuarioo");
    try {
      await axios.put(
        `http://localhost:4000/api/user/usuarios/${updatedUsuario._id}`,
        updatedUsuario
      );
      await Swal.fire({
        icon: "success",
        title: "Usuario Actualizado",
        showConfirmButton: false,
        timer: 2000,
      });

      const newUsuarios = usuarios.map((Usuario) =>
        Usuario._id === updatedUsuario._id ? updatedUsuario : Usuario
      );
      setUsuarios(newUsuarios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUsuarioLogueado(JSON.parse(localStorage.getItem("usuario")));
    getUsuarios();
  }, []);
  return (
    <UsuariosContext.Provider
      value={{
        usuarioLogueado,
        setUsuarioLogueado,
        login,
        logout,
        usuarios,
        eliminarUsuario,
        updateUsuario,
        addUsuarios,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosProvider;
