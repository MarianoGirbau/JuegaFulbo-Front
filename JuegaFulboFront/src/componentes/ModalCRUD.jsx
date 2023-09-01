import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { UsuariosContext } from "../context/UsuariosContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import "./ModalCRUD.css";
import { CanchasContext } from "../context/CanchasContext";

// actualizar en true sino por defecto agrega
export default function ModalCRUD({
  id,
  show,
  handleClose,
  actualizar,
  cancha,
}) {
  const { addCancha, canchas, updateCancha } = useContext(CanchasContext);
  const { usuarios, updateUsuario, addUsuarios } = useContext(UsuariosContext);
  const usuario = usuarios.find((usuario) => usuario._id === id);
  const canchaAeditar = canchas.find((can) => can._id === id);
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
  });

  const [dataCancha, setDataCancha] = useState({
    numero: "",
    capacidad: "",
    precio: "",
    img: "",
    reservas:
    [
        [null,null,null,null,null], //Domingo: 19:00, 20:00, 21:00, 22:00, 23:00
        [null,null,null,null,null], 
        [null,null,null,null,null], 
        [null,null,null,null,null], 
        [null,null,null,null,null], 
        [null,null,null,null,null], 
        [null,null,null,null,null]
    ]
  });

  useEffect(() => {
    if (usuario) {
      setDataUser({
        _id: usuario._id,
        password: usuario.password,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        rol: usuario.rol,
      });
    }
    if (canchaAeditar) {
      setDataCancha({
        _id: canchaAeditar._id,
        numero: 6,
        capacidad: canchaAeditar.capacidad,
        precio: canchaAeditar.precio,
        img: canchaAeditar.img,
      });
    }
  }, [usuario, canchaAeditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(dataUser).some((value) => value === "")) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos antes de enviar el formulario.",
        confirmButtonColor: "#b6ff1b",
        background: "#0f0f0f",
      });
      return;
    }
    handleClose();
    if (actualizar) {
      await updateUsuario(dataUser);
    } else {
      await addUsuarios(dataUser);
    }
  };

  const handleSubmitCancha = async (e) => {
    e.preventDefault();
    if (Object.values(dataCancha).some((value) => value === "")) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos antes de enviar el formulario.",
        confirmButtonColor: "#b6ff1b",
        background: "#0f0f0f",
      });
      return;
    }
    handleClose();

    if (
      !isNumberNonNegative(dataCancha.numero) ||
      !isNumberNonNegative(dataCancha.capacidad) ||
      !isNumberNonNegative(dataCancha.precio)
    ) {
      return;
    }
    if (actualizar) {
      await updateCancha(dataCancha);
    } else {
      await addCancha(dataCancha);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeCancha = (e) => {
    const { name, value } = e.target;
    if (name === "numero" || name === "capacidad" || name === "precio") {
      if (parseFloat(value) < 0) {
        return;
      }
    }
    setDataCancha((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isNumberNonNegative = (value) => {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue >= 0;
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modalFondo">
        <Modal.Body>
          <Modal.Header closeButton></Modal.Header>
          <section className="cont-usuario">
            {cancha ? (
              <Form id="form-registrooo" onSubmit={handleSubmitCancha}>
                <Form.Group className="mb-2">
                  <Form.Label className="gruppo-font">
                    Numero de Cancha
                  </Form.Label>
                  <Form.Control
                    type="number"
                    id="numero"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    minLength={8}
                    maxLength={15}
                    name="numero"
                    value={dataCancha.numero}
                    onChange={(e) => handleChangeCancha(e)}
                    placeholder="Ingresar numero de cancha"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="gruppoFont">Capacidad</Form.Label>
                  <Form.Control
                    type="number"
                    id="capacidad"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    name="capacidad"
                    value={dataCancha.capacidad}
                    minLength={10}
                    maxLength={30}
                    onChange={(e) => handleChangeCancha(e)}
                    placeholder="Ingresar la capacidad de jugadores"
                    required
                  />
                  <Form.Label className="gruppoFont">Precio</Form.Label>
                  <Form.Control
                    type="number"
                    id="precio"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    name="precio"
                    value={dataCancha.precio}
                    minLength={10}
                    maxLength={30}
                    onChange={(e) => handleChangeCancha(e)}
                    placeholder="Ingrese el precio del alquiler"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="gruppoFont">Imagen</Form.Label>
                  <Form.Control
                    type="text"
                    id="img"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    name="img"
                    value={dataCancha.img}
                    minLength={10}
                    maxLength={50}
                    onChange={(e) => handleChangeCancha(e)}
                    placeholder="Ingrese la URL de la imagen"
                    required
                  />
                </Form.Group>
                <Button
                  variant="black"
                  id="botonLog"
                  type="submit"
                  className="w-100 boton-agregar mt-3"
                  onClick={handleSubmitCancha}
                >
                  {actualizar ? (
                    <h4 className="m-0 py-3">Actualizar</h4>
                  ) : (
                    <h4 className="m-0 py-3">Agregar</h4>
                  )}
                </Button>
              </Form>
            ) : (
              <Form id="form-registrooo" onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label className="gruppo-font">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    id="nombre"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    name="nombre"
                    value={dataUser.nombre}
                    onChange={(e) => handleChange(e)}
                    minLength={8}
                    maxLength={15}
                    placeholder="Ingrese su nombre"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="gruppo-font">Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    id="apellido"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    minLength={8}
                    maxLength={15}
                    placeholder="Ingrese su apellido"
                    name="apellido"
                    value={dataUser.apellido}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="gruppo-font">
                    Correo Electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    name="email"
                    value={dataUser.email}
                    placeholder="user@gmail.com"
                    minLength={10}
                    maxLength={30}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </Form.Group>
                {!actualizar && (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Label className="gruppo-font">Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        className="custom-form-control custom-bg-dark placeholder-usuarios"
                        minLength={8}
                        maxLength={30}
                        name="password"
                        placeholder="Ingrese su contraseña"
                        value={dataUser.password}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label className="gruppo-font">
                        Confirmar contraseña
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="confirmPassword"
                        className="custom-form-control custom-bg-dark placeholder-usuarios"
                        minLength={8}
                        maxLength={30}
                        name="confirmPassword"
                        placeholder="Ingrese nuevamente su contraseña"
                        value={dataUser.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </>
                )}
                <Form.Group className="mb-2">
                  <Form.Label className="gruppo-font">Rol</Form.Label>
                  <Form.Control
                    as="select" // Utilizamos el componente select
                    id="rol"
                    className="custom-form-control custom-bg-dark placeholder-usuarios"
                    name="rol"
                    value={dataUser.rol}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un rol...</option>
                    <option value="admin">Admin</option>
                    <option value="usuario">Usuario</option>
                  </Form.Control>
                </Form.Group>
                <Button
                  variant="black"
                  id="botonLog"
                  type="submit"
                  className="w-100 boton-agregar"
                  onClick={handleSubmit}
                >
                  {actualizar ? (
                    <h4 className="m-0 py-3">Actualizar</h4>
                  ) : (
                    <h4 className="m-0 py-3">Agregar</h4>
                  )}
                </Button>
              </Form>
            )}
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

ModalCRUD.propTypes = {
  id: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  actualizar: PropTypes.bool,
  cancha: PropTypes.bool,
};

ModalCRUD.defaultProps = {
  actualizar: false,
  cancha: false,
};
